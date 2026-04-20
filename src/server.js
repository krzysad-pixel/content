const express = require('express');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const matter = require('gray-matter');
const { marked } = require('marked');

marked.setOptions({ gfm: true, breaks: false });

const PORT = process.env.PORT || 3333;
const REPO_ROOT = path.resolve(__dirname, '..');
const CONTENT_ROOT = path.join(REPO_ROOT, 'content');
const PRODUCTS_DIR = path.join(CONTENT_ROOT, 'products');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public');

const REQUIRED_FRONTMATTER = ['id', 'product', 'module', 'type', 'role', 'status'];

const execFileP = promisify(execFile);

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

function git(args, opts = {}) {
  return execFileP('git', args, { cwd: REPO_ROOT, maxBuffer: 10 * 1024 * 1024, ...opts });
}

async function listProducts() {
  const entries = await fsp.readdir(PRODUCTS_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();
}

async function readUnitFile(filePath) {
  const raw = await fsp.readFile(filePath, 'utf8');
  try {
    const parsed = matter(raw);
    return { filePath, frontmatter: parsed.data || {}, body: parsed.content || '', raw, parseError: null };
  } catch (err) {
    return { filePath, frontmatter: {}, body: raw, raw, parseError: err.message };
  }
}

function extractTitle(body) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function validateFrontmatter(fm, parseError) {
  const errors = [];
  if (parseError) errors.push(`YAML parse error: ${parseError}`);
  for (const field of REQUIRED_FRONTMATTER) {
    const v = fm[field];
    if (v === undefined || v === null || v === '') errors.push(`brak pola: ${field}`);
  }
  return errors;
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
    const u = await readUnitFile(full);
    const errors = validateFrontmatter(u.frontmatter, u.parseError);
    units.push({
      id: u.frontmatter.id || null,
      title: extractTitle(u.body),
      product: u.frontmatter.product || product,
      module: u.frontmatter.module || null,
      type: u.frontmatter.type || null,
      role: u.frontmatter.role || null,
      status: u.frontmatter.status || null,
      platform: u.frontmatter.platform || [],
      published_at: u.frontmatter.published_at || null,
      file: path.relative(CONTENT_ROOT, full),
      valid: errors.length === 0,
      errors,
    });
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

async function listUnitFilesRelative() {
  const products = await listProducts();
  const files = [];
  for (const product of products) {
    const unitsDir = path.join(PRODUCTS_DIR, product, 'units');
    let entries;
    try {
      entries = await fsp.readdir(unitsDir);
    } catch {
      continue;
    }
    for (const f of entries) {
      if (!f.endsWith('.md')) continue;
      files.push(path.relative(REPO_ROOT, path.join(unitsDir, f)));
    }
  }
  return files;
}

app.get('/api/products', async (_req, res) => {
  try {
    res.json(await listProducts());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function readProductDoc(product, filename) {
  const fullPath = path.join(PRODUCTS_DIR, product, filename);
  try {
    const raw = await fsp.readFile(fullPath, 'utf8');
    return { raw, html: marked.parse(raw) };
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

app.get('/api/products/:product', async (req, res) => {
  try {
    const { product } = req.params;
    const products = await listProducts();
    if (!products.includes(product)) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const [foundation, gaps, units] = await Promise.all([
      readProductDoc(product, 'foundation.md'),
      readProductDoc(product, 'gaps.md'),
      collectUnits(product),
    ]);
    const stats = { total: units.length, backlog: 0, ready: 0, published: 0, archived: 0 };
    for (const u of units) {
      if (stats[u.status] !== undefined) stats[u.status] += 1;
    }
    res.json({ product, foundation, gaps, stats });
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
    const errors = validateFrontmatter(unit.frontmatter, unit.parseError);
    res.json({
      id: unit.frontmatter.id,
      title: extractTitle(unit.body),
      frontmatter: unit.frontmatter,
      body: unit.body,
      file: path.relative(CONTENT_ROOT, unit.filePath),
      valid: errors.length === 0,
      errors,
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

function syncTimestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

app.post('/api/sync', async (_req, res) => {
  const report = { added: [], changed: [], invalid: [] };
  const result = { ok: false, pulled: false, committed: false, pushed: false, report };

  try {
    const { stdout: beforeSha } = await git(['rev-parse', 'HEAD']);
    const beforeFiles = new Set(await listUnitFilesRelative());

    try {
      await git(['pull', 'origin', 'main']);
      result.pulled = true;
    } catch (err) {
      result.error = `pull: ${(err.stderr || err.message).trim()}`;
      return res.status(502).json(result);
    }

    const { stdout: afterSha } = await git(['rev-parse', 'HEAD']);
    const afterFiles = await listUnitFilesRelative();
    const afterFilesSet = new Set(afterFiles);

    if (beforeSha.trim() !== afterSha.trim()) {
      try {
        const { stdout } = await git([
          'diff', '--name-status',
          `${beforeSha.trim()}..${afterSha.trim()}`,
          '--', 'content/products',
        ]);
        for (const line of stdout.split('\n')) {
          if (!line.trim()) continue;
          const [code, ...rest] = line.split('\t');
          const file = rest[rest.length - 1];
          if (!file || !file.endsWith('.md')) continue;
          if (code.startsWith('A')) report.added.push(file);
          else if (code.startsWith('M') || code.startsWith('R')) report.changed.push(file);
        }
      } catch {
        for (const f of afterFiles) if (!beforeFiles.has(f)) report.added.push(f);
      }
    }

    for (const product of await listProducts()) {
      const units = await collectUnits(product);
      for (const u of units) {
        if (!u.valid) report.invalid.push({ file: u.file, errors: u.errors });
      }
    }

    await git(['add', '-A']);
    let hasChanges = false;
    try {
      await git(['diff', '--cached', '--quiet']);
    } catch {
      hasChanges = true;
    }
    if (hasChanges) {
      try {
        await git(['commit', '-m', `sync: ${syncTimestamp()}`]);
        result.committed = true;
      } catch (err) {
        result.error = `commit: ${(err.stderr || err.message).trim()}`;
        return res.status(500).json(result);
      }
    }

    try {
      await git(['push', 'origin', 'main']);
      result.pushed = true;
    } catch (err) {
      result.error = `push: ${(err.stderr || err.message).trim()}`;
      return res.status(502).json(result);
    }

    result.ok = true;
    res.json(result);
  } catch (err) {
    result.error = err.message;
    res.status(500).json(result);
  }
});

if (fs.existsSync(PUBLIC_DIR)) {
  app.use(express.static(PUBLIC_DIR));
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`content-app listening on http://0.0.0.0:${PORT}`);
  console.log(`content root: ${CONTENT_ROOT}`);
});
