/**
 * 香港健康餐網站 - 主邏輯
 * 雙層展示：品牌牆（門店數≥3）+ 門店一覽
 */

// DOM 元素
const brandFilter = document.getElementById('brand-filter');
const districtFilter = document.getElementById('district-filter');
const searchInput = document.getElementById('search-input');
const restaurantList = document.getElementById('restaurant-list');
const restaurantCount = document.getElementById('restaurant-count');
const brandGrid = document.getElementById('brand-grid');
const qrModal = document.getElementById('qr-modal');
const qrModalTitle = document.getElementById('qr-modal-title');
const qrModalBody = document.getElementById('qr-modal-body');
const modalClose = document.getElementById('modal-close');
const sortBy = document.getElementById('sort-by');
const resetFiltersBtn = document.getElementById('reset-filters');

// 品牌牆：只顯示門店數 ≥ 3 的品牌
const BRANDS_FOR_WALL = typeof BRANDS !== 'undefined' ? BRANDS.filter((b) => b.storeCount >= 3) : [];

// 取得門店食物圖片 URL
function getStoreImage(store) {
  const key = store.image || 'bowl';
  const imgs = typeof FOOD_IMAGES !== 'undefined' ? FOOD_IMAGES : {};
  return imgs[key] || imgs.bowl || 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=280&fit=crop';
}

// 取得飲食標籤中文
function getDietaryLabel(id) {
  const opt = (typeof DIETARY_OPTIONS !== 'undefined' ? DIETARY_OPTIONS : []).find((d) => d.id === id);
  return opt ? opt.label : id;
}

// 渲染品牌卡片
function renderBrandCard(brand) {
  const card = document.createElement('a');
  card.className = 'brand-card';
  card.href = brand.website || brand.foodpanda || 'https://www.foodpanda.hk/zh/city/hong-kong';
  card.target = '_blank';
  card.rel = 'noopener';

  const productsHtml = (brand.products || [])
    .slice(0, 4)
    .map((p) => `<span class="brand-product-tag">${p}</span>`)
    .join('');

  const dietaryHtml = (brand.dietary || [])
    .map((d) => `<span class="dietary-tag">${getDietaryLabel(d)}</span>`)
    .join('');

  card.innerHTML = `
    <div class="brand-card-inner">
      <h3 class="brand-name">${brand.name}</h3>
      <div class="brand-store-count">${brand.storeCount} 間門店</div>
      ${dietaryHtml ? `<div class="brand-dietary">${dietaryHtml}</div>` : ''}
      <div class="brand-products">${productsHtml}</div>
      <div class="brand-actions">
        ${brand.website ? `<span class="brand-link">官網</span>` : ''}
        <span class="brand-link">Foodpanda</span>
      </div>
    </div>
  `;

  return card;
}

// 渲染門店卡片
function renderStoreCard(store) {
  const card = document.createElement('article');
  card.className = 'restaurant-card';

  const imgUrl = getStoreImage(store);
  const imgHtml = imgUrl ? `<img class="card-image" src="${imgUrl}" alt="${store.name} 食物" loading="lazy">` : '';

  const dietaryTags = (store.dietary || []).map((d) => `<span class="dietary-tag">${getDietaryLabel(d)}</span>`).join('');
  const dietaryNoteHtml = store.dietaryNote ? `<span class="dietary-tag warning">⚠ ${store.dietaryNote}</span>` : '';
  const dietaryHtml = dietaryTags || dietaryNoteHtml ? `<div class="card-dietary">${dietaryTags}${dietaryNoteHtml}</div>` : '';

  const productsHtml = (store.products || [])
    .map((p) => `<span class="product-tag">${p}</span>`)
    .join('');

  let orderLinksHtml = '';
  if (store.website) {
    orderLinksHtml += `<a href="${store.website}" target="_blank" rel="noopener" class="order-btn order-btn-website">🌐 官網</a>`;
  }
  orderLinksHtml += `
    <a href="${store.foodpanda}" target="_blank" rel="noopener" class="order-btn order-btn-foodpanda">🐼 Foodpanda</a>
    <a href="${store.keeta}" target="_blank" rel="noopener" class="order-btn order-btn-keeta">🛵 Keeta</a>
    <button class="order-btn order-btn-qr" data-id="${store.id}" data-name="${store.name}">📱 掃碼下單</button>
  `;

  const brandBadge = store.brandId
    ? `<span class="card-brand">${(BRANDS || []).find((b) => b.id === store.brandId)?.name || store.brandId}</span>`
    : '';

  card.innerHTML = `
    ${imgHtml}
    <div class="card-header">
      <h2 class="card-name">${store.name}</h2>
      <div class="card-badges">
        ${brandBadge}
        <span class="card-district">${store.district}</span>
      </div>
    </div>
    <div class="card-body">
      ${dietaryHtml}
      <div class="card-info">
        <span class="card-info-icon">📍</span>
        <div class="card-info-text">
          <div class="card-info-label">地址</div>
          ${store.address}
        </div>
      </div>
      <div class="card-info">
        <span class="card-info-icon">🕐</span>
        <div class="card-info-text">
          <div class="card-info-label">營業時間</div>
          ${store.hours || '請查 Google Maps 或致電確認'}
        </div>
      </div>
      ${store.phone ? `
      <div class="card-info">
        <span class="card-info-icon">📞</span>
        <div class="card-info-text">
          <div class="card-info-label">電話</div>
          <a href="tel:${(store.phone || '').replace(/\s/g, '')}">${store.phone}</a>
        </div>
      </div>
      ` : ''}
      <div class="card-products">
        <div class="card-products-title">主要產品</div>
        <div class="card-products-list">${productsHtml}</div>
      </div>
      <div class="card-order-links">${orderLinksHtml}</div>
    </div>
  `;

  const qrBtn = card.querySelector('.order-btn-qr');
  if (qrBtn) qrBtn.addEventListener('click', () => showQrModal(store));

  return card;
}

// 顯示 QR 碼彈窗
function showQrModal(store) {
  qrModalTitle.textContent = `${store.name} - 掃碼下單`;
  const options = [];
  if (store.website) options.push({ label: '官網', url: store.website, desc: '前往官方網站' });
  options.push(
    { label: 'Foodpanda', url: store.foodpanda, desc: '外賣送餐' },
    { label: 'Keeta', url: store.keeta, desc: '外賣送餐' }
  );

  qrModalBody.innerHTML = '<div class="qr-options"></div>';
  const container = qrModalBody.querySelector('.qr-options');
  options.forEach((opt) => {
    const div = document.createElement('div');
    div.className = 'qr-option';
    div.innerHTML = `
      <canvas></canvas>
      <div class="qr-option-info">
        <div class="qr-option-label">${opt.label}</div>
        <div class="qr-option-desc">${opt.desc}</div>
      </div>
    `;
    const canvas = div.querySelector('canvas');
    if (typeof QRCode !== 'undefined') {
      QRCode.toCanvas(canvas, opt.url, { width: 80, margin: 1 }, (err) => { if (err) console.error(err); });
    }
    container.appendChild(div);
  });
  qrModal.classList.add('active');
}

function closeQrModal() {
  qrModal.classList.remove('active');
}
modalClose.addEventListener('click', closeQrModal);
qrModal.addEventListener('click', (e) => { if (e.target === qrModal) closeQrModal(); });

// 初始化品牌篩選選項
function initBrandFilter() {
  if (!brandFilter) return;
  const brands = typeof BRANDS !== 'undefined' ? BRANDS : [];
  brands.forEach((b) => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = `${b.name}（${b.storeCount} 間）`;
    brandFilter.appendChild(opt);
  });
}

// 初始化特殊飲食需求篩選
let activeDietaryFilter = null;
function initDietaryChips() {
  const container = document.getElementById('dietary-chips');
  if (!container) return;
  const options = typeof DIETARY_OPTIONS !== 'undefined' ? DIETARY_OPTIONS : [];
  options.forEach((opt) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'dietary-chip';
    chip.textContent = opt.label;
    chip.title = opt.desc;
    chip.dataset.id = opt.id;
    chip.addEventListener('click', () => {
      activeDietaryFilter = activeDietaryFilter === opt.id ? null : opt.id;
      container.querySelectorAll('.dietary-chip').forEach((c) => c.classList.toggle('active', c.dataset.id === activeDietaryFilter));
      renderStoreList();
    });
    container.appendChild(chip);
  });
}

// 篩選門店
function getFilteredStores() {
  const brand = brandFilter ? brandFilter.value : 'all';
  const district = districtFilter.value;
  const dietary = activeDietaryFilter;
  const search = searchInput.value.trim().toLowerCase();
  const stores = typeof STORES !== 'undefined' ? STORES : RESTAURANTS || [];

  return stores.filter((s) => {
    const matchBrand = brand === 'all' || s.brandId === brand;
    const matchDistrict = district === 'all' || s.district === district;
    const matchDietary = !dietary || (s.dietary || []).includes(dietary);
    const matchSearch =
      !search ||
      (s.name || '').toLowerCase().includes(search) ||
      (s.district || '').toLowerCase().includes(search) ||
      (s.address || '').toLowerCase().includes(search) ||
      (s.products || []).some((p) => p.toLowerCase().includes(search)) ||
      (s.dietary || []).some((d) => getDietaryLabel(d).toLowerCase().includes(search)) ||
      (s.brandId && (BRANDS || []).some((b) => b.id === s.brandId && (b.name || '').toLowerCase().includes(search)));
    return matchBrand && matchDistrict && matchDietary && matchSearch;
  });
}

// 渲染品牌牆
function renderBrandWall() {
  if (!brandGrid) return;
  brandGrid.innerHTML = '';
  BRANDS_FOR_WALL.forEach((b) => brandGrid.appendChild(renderBrandCard(b)));
}

// 渲染門店列表
function renderStoreList() {
  let filtered = getFilteredStores();
  const sort = sortBy ? sortBy.value : 'name';
  if (sort === 'name') {
    filtered = filtered.slice().sort((a, b) => (a.name || '').localeCompare(b.name || '', 'zh-HK'));
  } else if (sort === 'district') {
    filtered = filtered.slice().sort((a, b) => (a.district || '').localeCompare(b.district || '', 'zh-HK'));
  } else if (sort === 'brand') {
    const getBrandName = (s) => {
      if (!s.brandId) return '';
      const b = (BRANDS || []).find((x) => x.id === s.brandId);
      return (b && b.name) ? b.name : s.brandId;
    };
    filtered = filtered.slice().sort((a, b) => getBrandName(a).localeCompare(getBrandName(b), 'zh-HK'));
  }
  restaurantCount.textContent = `共 ${filtered.length} 間門店`;

  restaurantList.innerHTML = '';
  if (filtered.length === 0) {
    restaurantList.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-state-icon">🔍</div>
        <p>找不到符合條件的門店，試試其他地區或關鍵字</p>
      </div>
    `;
    return;
  }
  filtered.forEach((s) => restaurantList.appendChild(renderStoreCard(s)));
}

// 事件監聽
if (brandFilter) brandFilter.addEventListener('change', renderStoreList);
districtFilter.addEventListener('change', renderStoreList);
searchInput.addEventListener('input', renderStoreList);
if (sortBy) sortBy.addEventListener('change', renderStoreList);
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    if (brandFilter) brandFilter.value = 'all';
    districtFilter.value = 'all';
    if (sortBy) sortBy.value = 'name';
    searchInput.value = '';
    activeDietaryFilter = null;
    const chipsContainer = document.getElementById('dietary-chips');
    if (chipsContainer) {
      chipsContainer.querySelectorAll('.dietary-chip').forEach((c) => c.classList.remove('active'));
    }
    renderStoreList();
  });
}

// 初始渲染
initBrandFilter();
initDietaryChips();
renderBrandWall();
renderStoreList();
