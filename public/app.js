const STATUSES = ['backlog', 'ready', 'published', 'archived'];

const els = {
  tbody: document.getElementById('units-tbody'),
  product: document.getElementById('filter-product'),
  status: document.getElementById('filter-status'),
  type: document.getElementById('filter-type'),
  refresh: document.getElementById('refresh-btn'),
  detail: document.getElementById('detail-panel'),
  detailContent: document.getElementById('detail-content'),
  detailClose: document.getElementById('detail-close'),
};

async function api(path, options) {
  const res = await fetch(path, options);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
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

function statusActions(unit) {
  return STATUSES
    .filter((s) => s !== unit.status)
    .map((s) => `<button data-action="status" data-id="${unit.id}" data-status="${s}">→ ${s}</button>`)
    .join('');
}

function renderUnits(units) {
  if (!units.length) {
    els.tbody.innerHTML = '<tr><td colspan="8" class="empty">Brak wyników</td></tr>';
    return;
  }
  els.tbody.innerHTML = units.map((u) => `
    <tr data-id="${u.id}">
      <td>${u.id || ''}</td>
      <td>${u.title || ''}</td>
      <td>${u.product || ''}</td>
      <td>${u.module || ''}</td>
      <td>${u.type || ''}</td>
      <td>${u.role || ''}</td>
      <td>${statusBadge(u.status)}</td>
      <td><div class="actions">${statusActions(u)}</div></td>
    </tr>
  `).join('');
}

async function loadUnits() {
  els.tbody.innerHTML = '<tr><td colspan="8" class="empty">Ładowanie…</td></tr>';
  try {
    const units = await api(`/api/units${buildQuery()}`);
    renderUnits(units);
  } catch (err) {
    els.tbody.innerHTML = `<tr><td colspan="8" class="empty">Błąd: ${err.message}</td></tr>`;
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

async function showDetail(id) {
  els.detail.classList.remove('hidden');
  els.detailContent.innerHTML = '<p>Ładowanie…</p>';
  try {
    const unit = await api(`/api/units/${encodeURIComponent(id)}`);
    const fm = unit.frontmatter || {};
    els.detailContent.innerHTML = `
      <h2>${unit.title || unit.id}</h2>
      <div class="meta">
        <strong>${unit.id}</strong> · ${fm.product || ''} / ${fm.module || ''} ·
        ${fm.type || ''} · ${fm.role || ''} · ${statusBadge(fm.status)}
      </div>
      <pre>${escapeHtml(unit.body || '')}</pre>
    `;
  } catch (err) {
    els.detailContent.innerHTML = `<p>Błąd: ${err.message}</p>`;
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

els.tbody.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action="status"]');
  if (btn) {
    e.stopPropagation();
    changeStatus(btn.dataset.id, btn.dataset.status).catch((err) => alert(err.message));
    return;
  }
  const row = e.target.closest('tr[data-id]');
  if (row) showDetail(row.dataset.id);
});

els.product.addEventListener('change', loadUnits);
els.status.addEventListener('change', loadUnits);
els.type.addEventListener('change', loadUnits);
els.refresh.addEventListener('click', loadUnits);
els.detailClose.addEventListener('click', () => els.detail.classList.add('hidden'));

loadProducts().then(loadUnits).catch((err) => {
  els.tbody.innerHTML = `<tr><td colspan="8" class="empty">Błąd startu: ${err.message}</td></tr>`;
});
