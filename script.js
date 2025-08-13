// Dados dos produtos
const products = [
  {
    "id": 601,
    "category": "Teclados",
    "name": "AULA Hero68 HE 65% Hot-Swap Wired Magnetic Gaming Keyboard",
    "description": "Teclado gamer 65% compacto, layout ANSI US, hot-swap, efeito hall 8kHz, RGB backlight, design magnético, ideal para jogos e digitação rápida.",
    "price": 238.51,
    "image": "https://ae-pic-a1.aliexpress-media.com/kf/Se6c08b6dc7ca43a6aef315edb981a7c8y.jpg",
    "link": "https://s.click.aliexpress.com/e/_ol62hWn"
  },
  {
    "id": 23,
    "category": "Teclados",
    "name": "Teclado Mecânico Gamer Redragon Dragonborn",
    "description": "Compacto 60% ABNT2, RGB, Switch Brown tátil. Ideal para performance e estilo no setup gamer.",
    "price": 298.21,
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rdxm-lz56dvi0efz6a7.webp",
    "link": "https://s.shopee.com.br/2Vh12Pypbi"
  },
  {
    "id": 24,
    "category": "Teclados",
    "name": "Teclado Mecânico Gamer Redragon Fizz",
    "description": "Teclado 60% ABNT2 RGB com keycaps doubleshot, leve, portátil e resistente para gamers exigentes.",
    "price": 257.62,
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rdya-mc27shdse1q196.webp",
    "link": "https://s.shopee.com.br/709QOmxhTj"
  }
];



// Categorias e lojas
const categories = [
    "Teclados", "Mouses", "Kits Gamer", "Placas de Vídeo", "Coolers e Refrigeração",
    "Gabinetes", "Placas-mãe", "Consoles", "Monitores", "Armazenamento", "Acessórios", "Fontes", "Memória RAM", "Processadores"
];

const stores = [
    { name: "Shopee", domain: "shopee.com.br" },
    { name: "Kabum", domain: "kabum.com.br" },
    { name: "AliExpress", domain: "aliexpress.com" },
    { name: "Pichau", domain: "pichau.com.br" },
    { name: "Shein", domain: "shein.com.br" }
];

// Estado da aplicação
let filteredProducts = [...products];
let selectedCategories = [];
let selectedStores = [];
let searchTerm = '';
let minPrice = '';
let maxPrice = '';
let sortBy = 'relevance';
let showOnlyOffers = false;

// Elementos DOM
const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    sidebar: document.getElementById('sidebar'),
    sidebarClose: document.getElementById('sidebar-close'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileOverlay: document.getElementById('mobile-overlay'),
    searchInput: document.getElementById('search-input'),
    minPriceInput: document.getElementById('min-price'),
    maxPriceInput: document.getElementById('max-price'),
    sortSelect: document.getElementById('sort-select'),
    offersOnly: document.getElementById('offers-only'),
    categoriesFilter: document.getElementById('categories-filter'),
    storesFilter: document.getElementById('stores-filter'),
    productsGrid: document.getElementById('products-grid'),
    emptyState: document.getElementById('empty-state'),
    resultsCount: document.getElementById('results-count'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalClose: document.getElementById('modal-close'),
    modalContent: document.getElementById('modal-content')
};

// Utilitários
const formatPrice = (price) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

const getStoreFromLink = (link) => {
    if (link.includes('shopee')) return 'Shopee';
    if (link.includes('kabum')) return 'Kabum';
    if (link.includes('aliexpress')) return 'AliExpress';
    if (link.includes('pichau')) return 'Pichau';
    if (link.includes('shein')) return 'Shein';
    return 'Loja Parceira';
};

const renderStars = () => {
    return ''; // Não mostra nada
};


// Tema
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        updateThemeIcon();
    }
};

const toggleTheme = () => {
    const isLight = document.body.classList.contains('light-theme');
    document.body.className = isLight ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', document.body.className);
    updateThemeIcon();
};

const updateThemeIcon = () => {
    const isLight = document.body.classList.contains('light-theme');
    elements.themeToggle.querySelector('i').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
};

// Filtros
const initFilters = () => {
    elements.categoriesFilter.innerHTML = categories.map(c => `
        <label class="checkbox-label">
            <input type="checkbox" value="${c}" class="category-checkbox">
            <span class="checkbox-custom"></span>
            ${c}
        </label>`).join('');
    elements.storesFilter.innerHTML = stores.map(s => `
        <label class="checkbox-label">
            <input type="checkbox" value="${s.name}" class="store-checkbox">
            <span class="checkbox-custom"></span>
            ${s.name}
        </label>`).join('');

    document.querySelectorAll('.category-checkbox').forEach(cb => cb.addEventListener('change', handleCategoryChange));
    document.querySelectorAll('.store-checkbox').forEach(cb => cb.addEventListener('change', handleStoreChange));
};

const handleCategoryChange = (e) => {
    if (e.target.checked) selectedCategories.push(e.target.value);
    else selectedCategories = selectedCategories.filter(c => c !== e.target.value);
    applyFilters();
};

const handleStoreChange = (e) => {
    if (e.target.checked) selectedStores.push(e.target.value);
    else selectedStores = selectedStores.filter(s => s !== e.target.value);
    applyFilters();
};

const applyFilters = () => {
    let filtered = [...products];
    if (selectedCategories.length) filtered = filtered.filter(p => selectedCategories.includes(p.category));
    if (selectedStores.length) filtered = filtered.filter(p => selectedStores.includes(getStoreFromLink(p.link)));
    if (searchTerm) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()));
    if (minPrice) filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
    if (showOnlyOffers) filtered = filtered.filter(p => p.isOffer);

    switch (sortBy) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    }

    filteredProducts = filtered;
    renderProducts();
    updateResultsCount();
};

const updateResultsCount = () => {
    const count = filteredProducts.length;
    elements.resultsCount.textContent = `${count} produto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
};

// Renderização
const renderProducts = () => {
    if (!filteredProducts.length) {
        elements.productsGrid.style.display = 'none';
        elements.emptyState.style.display = 'flex';
        return;
    }
    elements.productsGrid.style.display = 'grid';
    elements.emptyState.style.display = 'none';
    elements.productsGrid.innerHTML = filteredProducts.map(p => `
        <div class="product-card ${p.isOffer ? 'offer' : ''}" data-id="${p.id}">
            <div class="product-image" onclick="openModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-store">${getStoreFromLink(p.link)}</div>
                <h3 class="product-name" onclick="openModal(${p.id})">${p.name}</h3>
                <p class="product-description">${p.description}</p>
                <div class="product-rating"></div>
                <div class="product-price">
                    ${p.isOffer && p.originalPrice ? `<span class="original-price">${formatPrice(p.originalPrice)}</span>` : ''}
                    <span class="current-price">${formatPrice(p.price)}</span>
                </div>
                <button class="offer-btn" onclick="openAffiliate('${p.link}')"><i class="fas fa-fire"></i>Ver Oferta<i class="fas fa-external-link-alt"></i></button>
            </div>
        </div>`).join('');
};

// Modal
const openModal = (id) => {
    const p = products.find(pr => pr.id === id);
    if (!p) return;
    const discount = p.isOffer && p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    elements.modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-image"><img src="${p.image}" alt="${p.name}"></div>
            <div class="modal-info">
                <div class="modal-badges">
                    <span class="modal-badge store">${getStoreFromLink(p.link)}</span>
                    <span class="modal-badge category">${p.category}</span>
                </div>
                <h1 class="modal-title">${p.name}</h1>
                <p class="modal-description">${p.description}</p>
               <div class="modal-rating"></div>
                <div class="modal-price-section">
                    ${p.isOffer && p.originalPrice ? `<div class="modal-original-price"><span class="original-price">${formatPrice(p.originalPrice)}</span><span class="modal-discount">-${discount}%</span></div>` : ''}
                    <div class="modal-current-price">${formatPrice(p.price)}</div>
                    <div class="modal-installments">ou em até 12x de ${formatPrice(p.price / 12)}</div>
                </div>
                <div class="modal-actions">
                    <button class="modal-offer-btn" onclick="openAffiliate('${p.link}')"><i class="fas fa-fire"></i>Ver Oferta na ${getStoreFromLink(p.link)}<i class="fas fa-external-link-alt"></i></button>
                </div>
            </div>
        </div>`;
    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

const openAffiliate = (link) => window.open(link, '_blank', 'noopener,noreferrer');

// Sidebar mobile
const toggleSidebar = () => {
    elements.sidebar.classList.toggle('active');
    elements.mobileOverlay.classList.toggle('active');
    document.body.style.overflow = elements.sidebar.classList.contains('active') ? 'hidden' : '';
};

const closeSidebar = () => {
    elements.sidebar.classList.remove('active');
    elements.mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

// Event listeners
const initEventListeners = () => {
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.mobileMenuBtn.addEventListener('click', toggleSidebar);
    elements.sidebarClose.addEventListener('click', closeSidebar);
    elements.mobileOverlay.addEventListener('click', closeSidebar);
    elements.searchInput.addEventListener('input', (e) => { searchTerm = e.target.value; applyFilters(); });
    elements.minPriceInput.addEventListener('input', (e) => { minPrice = e.target.value; applyFilters(); });
    elements.maxPriceInput.addEventListener('input', (e) => { maxPrice = e.target.value; applyFilters(); });
    elements.sortSelect.addEventListener('change', (e) => { sortBy = e.target.value; applyFilters(); });
    elements.offersOnly.addEventListener('change', (e) => { showOnlyOffers = e.target.checked; applyFilters(); });
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', (e) => { if (e.target === elements.modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 't') { e.preventDefault(); toggleTheme(); }
        if (e.key === 'Escape') { closeModal(); closeSidebar(); }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeSidebar(); });
};

// Inicialização
const init = () => {
    initTheme();
    initFilters();
    initEventListeners();
    renderProducts();
    updateResultsCount();
};

document.addEventListener('DOMContentLoaded', init);

