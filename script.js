// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    themeToggle.innerHTML = newTheme === 'light'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

// Products Management
class ProductManager {
    constructor() {
        this.products = this.loadProducts();
        this.init();
    }

    loadProducts() {
        const saved = localStorage.getItem('bytesupply_products');
        if (saved) {
            return JSON.parse(saved);
        }

        return [
            {
                id: 1,
                name: "Mouse Gamer RGB Pro",
                description: "Mouse gamer de alta precisão com iluminação RGB personalizável e 12000 DPI",
                price: 149.90,
                image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
            },
            {
                id: 2,
                name: "Teclado Mecânico RGB",
                description: "Teclado mecânico com switches blue, iluminação RGB e teclas anti-ghosting",
                price: 299.90,
                image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg"
            },
            {
                id: 3,
                name: "Headset Gamer 7.1",
                description: "Headset com som surround 7.1, microfone removível e almofadas confortáveis",
                price: 199.90,
                image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
            },
            {
                id: 4,
                name: "Mousepad RGB Grande",
                description: "Mousepad gamer extra grande com iluminação RGB nas bordas e base antiderrapante",
                price: 89.90,
                image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
            }
        ];
    }

    init() {
        this.renderProducts();
    }

    renderProducts() {
        const grid = document.getElementById('products-grid');
        if (!grid) return;

        if (this.products.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <i class="fas fa-box-open"></i>
                    <h3>Nenhum produto encontrado</h3>
                    <p>Adicione produtos através do painel administrativo</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.src='https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                        <button class="order-btn">
                            <i class="fas fa-shopping-cart"></i>
                            Quero Esse
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Inicializa o gerenciador de produtos
const productManager = new ProductManager();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Image load animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', () => img.style.opacity = '1');
        img.addEventListener('error', () => img.style.opacity = '0.5');
    });
});

console.log('ByteSupply Store loaded (modo visual apenas, sem pedidos). 🚀');
