const express = require('express');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');

const PORT = process.env.PORT || 3333;
const CONTENT_ROOT = path.resolve(__dirname, '..', 'content');
const PRODUCTS_DIR = path.join(CONTENT_ROOT, 'products');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

async function listProducts() {
  const entries = await fsp.readdir(PRODUCTS_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();
}

async function readUnitFile(filePath) {
  const raw = await fsp.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  return { filePath, frontmatter: parsed.data, body: parsed.content, raw };
}

function extractTitle(body) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

async function collectUnits(product) {
  const unitsDir = path.join(PRODUCTS_DIR, product, 'units');
  let files;
  try {
    files = await fsp.readdir(unitsDir);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
  const units = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const full = path.join(unitsDir, file);
    try {
      const u = await readUnitFile(full);
      units.push({
        id: u.frontmatter.id,
        title: extractTitle(u.body),
        product: u.frontmatter.product || product,
        module: u.frontmatter.module || null,
        type: u.frontmatter.type || null,
        role: u.frontmatter.role || null,
        status: u.frontmatter.status || null,
        platform: u.frontmatter.platform || [],
        published_at: u.frontmatter.published_at || null,
        file: path.relative(CONTENT_ROOT, full),
      });
    } catch (err) {
      console.error(`Failed to parse ${full}:`, err.message);
    }
  }
  return units;
}

async function findUnitFile(id) {
  const products = await listProducts();
  for (const product of products) {
    const unitsDir = path.join(PRODUCTS_DIR, product, 'units');
    let files;
    try {
      files = await fsp.readdir(unitsDir);
    } catch {
      continue;
    }
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const full = path.join(unitsDir, file);
      const u = await readUnitFile(full);
      if (u.frontmatter.id === id) return { ...u, product };
    }
  }
  return null;
}

app.get('/api/products', async (_req, res) => {
  try {
    res.json(await listProducts());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/units', async (req, res) => {
  try {
    const { product, status, type, role, module: mod } = req.query;
    const products = product ? [product] : await listProducts();
    let units = [];
    for (const p of products) {
      units = units.concat(await collectUnits(p));
    }
    if (status) units = units.filter((u) => u.status === status);
    if (type) units = units.filter((u) => u.type === type);
    if (role) units = units.filter((u) => u.role === role);
    if (mod) units = units.filter((u) => u.module === mod);
    units.sort((a, b) => (a.id || '').localeCompare(b.id || ''));
    res.json(units);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/units/:id', async (req, res) => {
  try {
    const unit = await findUnitFile(req.params.id);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    res.json({
      id: unit.frontmatter.id,
      title: extractTitle(unit.body),
      frontmatter: unit.frontmatter,
      body: unit.body,
      file: path.relative(CONTENT_ROOT, unit.filePath),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const ALLOWED_STATUSES = ['backlog', 'ready', 'published', 'archived'];

app.patch('/api/units/:id/status', async (req, res) => {
  try {
    const { status } = req.body || {};
    if (!ALLOWED_STATUSES.includes(status)) {
      return res.status(400).json({ error: `status must be one of ${ALLOWED_STATUSES.join(', ')}` });
    }
    const unit = await findUnitFile(req.params.id);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    const newFrontmatter = { ...unit.frontmatter, status };
    const newContent = matter.stringify(unit.body, newFrontmatter);
    await fsp.writeFile(unit.filePath, newContent, 'utf8');
    res.json({ id: unit.frontmatter.id, status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

if (fs.existsSync(PUBLIC_DIR)) {
  app.use(express.static(PUBLIC_DIR));
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`content-app listening on http://0.0.0.0:${PORT}`);
  console.log(`content root: ${CONTENT_ROOT}`);
});
