const STATUSES = ['backlog', 'ready', 'published', 'archived'];

const els = {
  tbody: document.getElementById('units-tbody'),
  product: document.getElementById('filter-product'),
  status: document.getElementById('filter-status'),
  type: document.getElementById('filter-type'),
  refresh: document.getElementById('refresh-btn'),
  sync: document.getElementById('sync-btn'),
  syncModal: document.getElementById('sync-modal'),
  syncContent: document.getElementById('sync-content'),
  syncClose: document.getElementById('sync-close'),
  detail: document.getElementById('detail-panel'),
  detailContent: document.getElementById('detail-content'),
  detailClose: document.getElementById('detail-close'),
  viewList: document.getElementById('view-list'),
  viewProduct: document.getElementById('view-product'),
  backToList: document.getElementById('back-to-list'),
  productName: document.getElementById('product-name'),
  productStats: document.getElementById('product-stats'),
  productFoundation: document.getElementById('product-foundation'),
  productGaps: document.getElementById('product-gaps'),
};

const COLSPAN = 9;

async function api(path, options) {
  const res = await fetch(path, options);
  let body = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }
  if (!res.ok) {
    const msg = (body && body.error) || res.statusText || `HTTP ${res.status}`;
    const err = new Error(msg);
    err.body = body;
    throw err;
  }
  return body;
}

async function loadProducts() {
  const products = await api('/api/products');
  els.product.innerHTML = '<option value="">— wszystkie —</option>' +
    products.map((p) => `<option value="${p}">${p}</option>`).join('');
}

function buildQuery() {
  const params = new URLSearchParams();
  if (els.product.value) params.set('product', els.product.value);
  if (els.status.value) params.set('status', els.status.value);
  if (els.type.value) params.set('type', els.type.value);
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

function statusBadge(status) {
  const s = status || 'backlog';
  return `<span class="badge badge-${s}">${s}</span>`;
}

function validityBadge(unit) {
  if (unit.valid) return '<span class="badge badge-valid">OK</span>';
  const tip = (unit.errors || []).join(', ').replace(/"/g, '&quot;');
  return `<span class="badge badge-invalid" title="${tip}">invalid</span>`;
}

function statusActions(unit) {
  return STATUSES
    .filter((s) => s !== unit.status)
    .map((s) => `<button data-action="status" data-id="${unit.id}" data-status="${s}">→ ${s}</button>`)
    .join('');
}

function renderUnits(units) {
  if (!units.length) {
    els.tbody.innerHTML = `<tr><td colspan="${COLSPAN}" class="empty">Brak wyników</td></tr>`;
    return;
  }
  els.tbody.innerHTML = units.map((u) => `
    <tr data-id="${u.id || ''}" class="${u.valid ? '' : 'row-invalid'}">
      <td>${u.id || ''}</td>
      <td>${u.title || ''}</td>
      <td><a href="#/product/${encodeURIComponent(u.product || '')}" class="product-link" data-product="${u.product || ''}">${u.product || ''}</a></td>
      <td>${u.module || ''}</td>
      <td>${u.type || ''}</td>
      <td>${u.role || ''}</td>
      <td>${statusBadge(u.status)}</td>
      <td>${validityBadge(u)}</td>
      <td><div class="actions">${u.id ? statusActions(u) : ''}</div></td>
    </tr>
  `).join('');
}

async function loadUnits() {
  els.tbody.innerHTML = `<tr><td colspan="${COLSPAN}" class="empty">Ładowanie…</td></tr>`;
  try {
    const units = await api(`/api/units${buildQuery()}`);
    renderUnits(units);
  } catch (err) {
    els.tbody.innerHTML = `<tr><td colspan="${COLSPAN}" class="empty">Błąd: ${err.message}</td></tr>`;
  }
}

async function changeStatus(id, status) {
  await api(`/api/units/${encodeURIComponent(id)}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  await loadUnits();
}

let currentDetailBody = '';
let currentDetailId = null;
let currentDetailMeta = null;

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '0';
  ta.style.left = '0';
  ta.style.opacity = '0';
  ta.style.pointerEvents = 'none';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    if (!document.execCommand('copy')) throw new Error('execCommand copy failed');
  } finally {
    document.body.removeChild(ta);
  }
}

async function copyDetailBody() {
  const btn = document.getElementById('detail-copy');
  if (!btn) return;
  try {
    await copyTextToClipboard(currentDetailBody);
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Skopiowano!';
    btn.classList.add('copied');
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('copied');
      btn.disabled = false;
    }, 1500);
  } catch (err) {
    alert('Nie udało się skopiować: ' + err.message);
  }
}

function renderDetailView(title) {
  const fm = currentDetailMeta || {};
  els.detailContent.innerHTML = `
    <div class="detail-header">
      <h2>${escapeHtml(title || currentDetailId || '')}</h2>
      <div class="detail-actions">
        <button id="detail-edit" type="button" class="edit-btn" title="Edytuj treść CU">✎ Edytuj</button>
        <button id="detail-copy" type="button" class="copy-btn" title="Kopiuj treść CU">📋 Kopiuj</button>
      </div>
    </div>
    <div class="meta">
      <strong>${escapeHtml(currentDetailId || '')}</strong> · ${escapeHtml(fm.product || '')} / ${escapeHtml(fm.module || '')} ·
      ${escapeHtml(fm.type || '')} · ${escapeHtml(fm.role || '')} · ${statusBadge(fm.status)}
    </div>
    <pre>${escapeHtml(currentDetailBody)}</pre>
    <div id="detail-feedback" class="detail-feedback" aria-live="polite"></div>
  `;
  document.getElementById('detail-copy').addEventListener('click', copyDetailBody);
  document.getElementById('detail-edit').addEventListener('click', enterEditMode);
}

function renderDetailEdit(title) {
  const fm = currentDetailMeta || {};
  els.detailContent.innerHTML = `
    <div class="detail-header">
      <h2>${escapeHtml(title || currentDetailId || '')}</h2>
      <div class="detail-actions">
        <button id="detail-save" type="button" class="save-btn">💾 Zapisz</button>
        <button id="detail-cancel" type="button" class="cancel-btn">Anuluj</button>
      </div>
    </div>
    <div class="meta">
      <strong>${escapeHtml(currentDetailId || '')}</strong> · ${escapeHtml(fm.product || '')} / ${escapeHtml(fm.module || '')} ·
      ${escapeHtml(fm.type || '')} · ${escapeHtml(fm.role || '')} · ${statusBadge(fm.status)}
    </div>
    <textarea id="detail-editor" class="detail-editor" spellcheck="false"></textarea>
    <div id="detail-feedback" class="detail-feedback" aria-live="polite"></div>
  `;
  const ta = document.getElementById('detail-editor');
  ta.value = currentDetailBody;
  ta.focus();
  document.getElementById('detail-save').addEventListener('click', saveDetailContent);
  document.getElementById('detail-cancel').addEventListener('click', () => renderDetailView(title));
}

function enterEditMode() {
  const title = (currentDetailMeta && currentDetailMeta.title) || currentDetailId;
  renderDetailEdit(title);
}

async function saveDetailContent() {
  const ta = document.getElementById('detail-editor');
  const saveBtn = document.getElementById('detail-save');
  const cancelBtn = document.getElementById('detail-cancel');
  if (!ta || !saveBtn) return;
  const newBody = ta.value;
  saveBtn.disabled = true;
  cancelBtn.disabled = true;
  saveBtn.textContent = 'Zapisuję…';
  try {
    await api(`/api/units/${encodeURIComponent(currentDetailId)}/content`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: newBody }),
    });
    currentDetailBody = newBody;
    const title = (currentDetailMeta && currentDetailMeta.title) || currentDetailId;
    renderDetailView(title);
    const fb = document.getElementById('detail-feedback');
    if (fb) {
      fb.textContent = '✓ Zapisano';
      fb.classList.add('ok');
      setTimeout(() => {
        fb.textContent = '';
        fb.classList.remove('ok');
      }, 2000);
    }
  } catch (err) {
    saveBtn.disabled = false;
    cancelBtn.disabled = false;
    saveBtn.textContent = '💾 Zapisz';
    alert('Nie udało się zapisać: ' + err.message);
  }
}

async function showDetail(id) {
  if (!id) return;
  els.detail.classList.remove('hidden');
  els.detailContent.innerHTML = '<p>Ładowanie…</p>';
  try {
    const unit = await api(`/api/units/${encodeURIComponent(id)}`);
    currentDetailId = unit.id;
    currentDetailBody = unit.body || '';
    currentDetailMeta = {
      title: unit.title,
      product: (unit.frontmatter || {}).product || '',
      module: (unit.frontmatter || {}).module || '',
      type: (unit.frontmatter || {}).type || '',
      role: (unit.frontmatter || {}).role || '',
      status: (unit.frontmatter || {}).status || '',
    };
    renderDetailView(unit.title || unit.id);
  } catch (err) {
    els.detailContent.innerHTML = `<p>Błąd: ${err.message}</p>`;
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function openSyncModal() {
  els.syncModal.classList.remove('hidden');
}

function closeSyncModal() {
  els.syncModal.classList.add('hidden');
}

function renderSyncReport(result) {
  const { ok, pulled, committed, pushed, report = {}, error } = result;
  const added = report.added || [];
  const changed = report.changed || [];
  const invalid = report.invalid || [];

  const statusRow = (label, done) =>
    `<li>${done ? '✓' : '○'} ${label}</li>`;

  const list = (title, items, renderItem) => items.length
    ? `<h3>${title} (${items.length})</h3><ul class="sync-list">${items.map(renderItem).join('')}</ul>`
    : `<h3>${title}</h3><p class="muted">— brak —</p>`;

  els.syncContent.innerHTML = `
    <p class="sync-summary ${ok ? 'ok' : 'err'}">
      ${ok ? 'Zsynchronizowano.' : 'Sync zakończony błędem.'}
    </p>
    ${error ? `<pre class="sync-error">${escapeHtml(error)}</pre>` : ''}
    <ul class="sync-steps">
      ${statusRow('pull', pulled)}
      ${statusRow(`commit${committed ? '' : ' (brak zmian)'}`, committed)}
      ${statusRow('push', pushed)}
    </ul>
    ${list('Dodane', added, (f) => `<li>${escapeHtml(f)}</li>`)}
    ${list('Zmienione', changed, (f) => `<li>${escapeHtml(f)}</li>`)}
    ${list('Błędne', invalid, (it) =>
      `<li><strong>${escapeHtml(it.file)}</strong><br /><span class="muted">${escapeHtml(it.errors.join(', '))}</span></li>`
    )}
  `;
}

async function runSync() {
  els.sync.disabled = true;
  els.sync.textContent = 'Sync…';
  openSyncModal();
  els.syncContent.innerHTML = '<p class="sync-summary">Trwa synchronizacja…</p>';
  try {
    const res = await fetch('/api/sync', { method: 'POST' });
    let body = null;
    try { body = await res.json(); } catch { body = null; }
    if (!body) {
      renderSyncReport({ ok: false, error: `HTTP ${res.status}` });
    } else {
      renderSyncReport(body);
    }
  } catch (err) {
    renderSyncReport({ ok: false, error: err.message });
  } finally {
    els.sync.disabled = false;
    els.sync.textContent = 'Sync';
    await loadUnits();
  }
}

els.tbody.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action="status"]');
  if (btn) {
    e.stopPropagation();
    changeStatus(btn.dataset.id, btn.dataset.status).catch((err) => alert(err.message));
    return;
  }
  const link = e.target.closest('a.product-link');
  if (link) {
    return;
  }
  const row = e.target.closest('tr[data-id]');
  if (row && row.dataset.id) showDetail(row.dataset.id);
});

function showListView() {
  els.viewProduct.classList.add('hidden');
  els.viewList.classList.remove('hidden');
}

function showProductView() {
  els.viewList.classList.add('hidden');
  els.viewProduct.classList.remove('hidden');
}

function renderStats(stats) {
  const items = [
    { k: 'total', label: 'Total' },
    { k: 'backlog', label: 'Backlog' },
    { k: 'ready', label: 'Ready' },
    { k: 'published', label: 'Published' },
    { k: 'archived', label: 'Archived' },
  ];
  els.productStats.innerHTML = items.map((it) =>
    `<div class="stat stat-${it.k}"><div class="stat-value">${stats[it.k] ?? 0}</div><div class="stat-label">${it.label}</div></div>`
  ).join('');
}

async function loadProduct(product) {
  showProductView();
  els.productName.textContent = product;
  els.productStats.innerHTML = '<p class="muted">Ładowanie…</p>';
  els.productFoundation.innerHTML = '';
  els.productGaps.innerHTML = '';
  try {
    const data = await api(`/api/products/${encodeURIComponent(product)}`);
    renderStats(data.stats || {});
    els.productFoundation.innerHTML = (data.foundation && data.foundation.html) || '<p class="muted">Brak foundation.md</p>';
    els.productGaps.innerHTML = (data.gaps && data.gaps.html) || '<p class="muted">Brak gaps.md</p>';
  } catch (err) {
    els.productStats.innerHTML = `<p class="sync-error">Błąd: ${escapeHtml(err.message)}</p>`;
  }
}

function handleRoute() {
  const hash = window.location.hash || '';
  const match = hash.match(/^#\/product\/([^/]+)/);
  if (match) {
    loadProduct(decodeURIComponent(match[1]));
  } else {
    showListView();
  }
}

els.product.addEventListener('change', loadUnits);
els.status.addEventListener('change', loadUnits);
els.type.addEventListener('change', loadUnits);
els.refresh.addEventListener('click', loadUnits);
els.sync.addEventListener('click', runSync);
els.syncClose.addEventListener('click', closeSyncModal);
els.syncModal.querySelector('.modal-backdrop').addEventListener('click', closeSyncModal);
els.detailClose.addEventListener('click', () => els.detail.classList.add('hidden'));
els.backToList.addEventListener('click', () => { window.location.hash = ''; });
window.addEventListener('hashchange', handleRoute);

loadProducts()
  .then(loadUnits)
  .then(handleRoute)
  .catch((err) => {
    els.tbody.innerHTML = `<tr><td colspan="${COLSPAN}" class="empty">Błąd startu: ${err.message}</td></tr>`;
  });
