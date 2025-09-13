 // Product data
        const products = [
            {
                id: 1,
                title: "MacBook Pro 16\"",
                owner: "Apple Inc.",
                price: 2399,
                category: "laptop",
                condition: "new",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Powerful laptop for professionals with M2 Pro chip, 32GB RAM, and 1TB SSD.",
                specs: {
                    "Processor": "Apple M2 Pro",
                    "RAM": "32GB",
                    "Storage": "1TB SSD",
                    "Display": "16.2-inch Liquid Retina XDR",
                    "Graphics": "19-core GPU",
                    "Battery": "Up to 21 hours"
                }
            },
            {
                id: 2,
                title: "iPhone 17 Pro Max",
                owner: "Apple Inc.",
                price: 1599,
                category: "phone",
                condition: "new",
                image: "https://www.cnet.com/a/img/resize/e7b35446d3f9988dbfe1684240575428494ba915/hub/2025/09/09/f19085c5-43e7-4241-b910-643b000f4a68/apple-00-02-04-18-still004.jpg?auto=webp&fit=crop&height=675&width=1200",
                description: "Latest iPhone with Dynamic Island, Always-On display, and powerful camera system.",
                specs: {
                    "Display": "6.9-inch Super Retina XDR",
                    "Chip": "A19 Bionic",
                    "Storage": "512GB",
                    "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto, 12MP Front, LiDAR, 10x Optical Zoom",
                    "Battery": "Up to 28 hours video playback"
                }
            },
            {
                id: 3,
                title: "Samsung Galaxy S23 Ultra",
                owner: "Samsung Electronics",
                price: 1199,
                category: "phone",
                condition: "new",
                image: "https://images.unsplash.com/photo-1676046180197-31e67bd3d3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Premium Android phone with S Pen, 200MP camera, and Snapdragon 8 Gen 2.",
                specs: {
                    "Display": "6.8-inch Dynamic AMOLED 2X",
                    "Chip": "Snapdragon 8 Gen 2",
                    "RAM": "12GB",
                    "Storage": "256GB",
                    "Camera": "200MP Wide, 12MP Ultra Wide, 10MP Telephoto x2",
                    "Battery": "5000mAh"
                }
            },
            {
                id: 4,
                title: "iPad Pro 12.9\"",
                owner: "Apple Inc.",
                price: 1099,
                category: "tablet",
                condition: "new",
                image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Professional tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
                specs: {
                    "Display": "12.9-inch Liquid Retina XDR",
                    "Chip": "Apple M2",
                    "Storage": "128GB",
                    "Camera": "12MP Wide, 10MP Ultra Wide",
                    " Connectivity": "Wi-Fi 6E, 5G",
                    "Compatibility": "Apple Pencil (2nd gen), Magic Keyboard"
                }
            },
            {
                id: 5,
                title: "Sony WH-1000XM5",
                owner: "Sony Corporation",
                price: 349,
                category: "accessory",
                condition: "new",
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Industry-leading noise canceling headphones with 30-hour battery life.",
                specs: {
                    "Noise Canceling": "Yes",
                    "Battery Life": "Up to 30 hours",
                    "Charging": "Quick charge (3 min for 3 hours)",
                    "Connectivity": "Bluetooth 5.2",
                    "Weight": "250g",
                    "Microphone": "Built-in for calls"
                }
            },
            {
                id: 6,
                title: "Dell XPS 13",
                owner: "Dell Technologies",
                price: 1299,
                category: "laptop",
                condition: "refurbished",
                image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Compact and powerful ultrabook with Intel Evo platform, 16GB RAM, and 512GB SSD.",
                specs: {
                    "Processor": "Intel Core i7-1250U",
                    "RAM": "16GB LPDDR5",
                    "Storage": "512GB SSD",
                    "Display": "13.4-inch FHD+",
                    "Graphics": "Intel Iris Xe",
                    "Battery": "Up to 12 hours"
                }
            },
            {
                id: 7,
                title: "Google Pixel 7 Pro",
                owner: "Google LLC",
                price: 899,
                category: "phone",
                condition: "new",
                image: "https://images.unsplash.com/photo-1662947995853-2cb6c3bf6dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Google's flagship phone with Tensor G2 chip, advanced camera software, and clean Android experience.",
                specs: {
                    "Display": "6.7-inch QHD+ OLED",
                    "Chip": "Google Tensor G2",
                    "RAM": "12GB",
                    "Storage": "128GB",
                    "Camera": "50MP Wide, 12MP Ultra Wide, 48MP Telephoto",
                    "Battery": "5000mAh"
                }
            },
            {
                id: 8,
                title: "Logitech MX Keys",
                owner: "Logitech",
                price: 99,
                category: "accessory",
                condition: "used",
                image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Wireless keyboard with comfortable typing experience, backlit keys, and multi-device support.",
                specs: {
                    "Connectivity": "Bluetooth, Unifying receiver",
                    "Battery Life": "Up to 10 days (backlit off)",
                    "Backlighting": "Yes",
                    "Multi-Device": "Up to 3 devices",
                    "Layout": "Full-size with numeric keypad",
                    "Compatibility": "Windows, macOS, Linux, iOS, Android"
                }
            }
        ];

        // DOM elements
        const productsGrid = document.getElementById('productsGrid');
        const productsList = document.getElementById('productsList');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const searchInput = document.getElementById('searchInput');
        const priceRange = document.getElementById('priceRange');
        const currentPrice = document.getElementById('currentPrice');
        const applyFilters = document.getElementById('applyFilters');
        const gridView = document.getElementById('gridView');
        const listView = document.getElementById('listView');
        const productModal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.getElementById('closeModal');
        const cartIcon = document.getElementById('cartIcon');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.querySelector('.cart-count');
        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartShipping = document.getElementById('cartShipping');
        const cartTax = document.getElementById('cartTax');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');

        // Current page and items per page
        let currentPage = 1;
        const itemsPerPage = 7;

        // Cart array
        let cart = [];

        // Display products
        function displayProducts(productsToShow) {
            productsGrid.innerHTML = '';
            productsList.innerHTML = '';
            
            productsToShow.forEach(product => {
                // Grid view card
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <div class="product-badge">${product.condition}</div>
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-owner">
                            <div class="owner-avatar">
                                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(product.owner)}&background=random" alt="${product.owner}">
                            </div>
                            <span class="owner-name">${product.owner}</span>
                        </div>
                        <div class="product-price">$${product.price}</div>
                        <div class="product-actions">
                            <button class="btn btn-outline" onclick="addToCart(${product.id})">
                                <i class="far fa-heart"></i> Save
                            </button>
                            <button class="btn btn-primary" onclick="addToCart(${product.id}, true)">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                productCard.addEventListener('click', (e) => {
                    if (!e.target.closest('.product-actions')) {
                        showProductDetail(product);
                    }
                });
                productsGrid.appendChild(productCard);
                
                // List view item
                const productListItem = document.createElement('div');
                productListItem.classList.add('product-card', 'product-list-item');
                productListItem.innerHTML = `
                    <div class="product-badge">${product.condition}</div>
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-owner">
                            <div class="owner-avatar">
                                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(product.owner)}&background=random" alt="${product.owner}">
                            </div>
                            <span class="owner-name">${product.owner}</span>
                        </div>
                        <div class="product-price">$${product.price}</div>
                        <div class="product-actions">
                            <button class="btn btn-outline" onclick="addToCart(${product.id})">
                                <i class="far fa-heart"></i> Save
                            </button>
                            <button class="btn btn-primary" onclick="addToCart(${product.id}, true)">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                productListItem.addEventListener('click', (e) => {
                    if (!e.target.closest('.product-actions')) {
                        showProductDetail(product);
                    }
                });
                productsList.appendChild(productListItem);
            });
        }

        // Filter products based on search, price, and categories
        function filterProducts() {
            const searchText = searchInput.value.toLowerCase();
            const maxPrice = parseInt(priceRange.value);
            
            const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                .map(checkbox => checkbox.value);
            
            const selectedConditions = Array.from(document.querySelectorAll('input[name="condition"]:checked'))
                .map(checkbox => checkbox.value);
            
            const filteredProducts = products.filter(product => {
                const matchesSearch = product.title.toLowerCase().includes(searchText) || 
                                    product.description.toLowerCase().includes(searchText);
                const matchesPrice = product.price <= maxPrice;
                const matchesCategory = selectedCategories.includes(product.category);
                const matchesCondition = selectedConditions.includes(product.condition);
                
                return matchesSearch && matchesPrice && matchesCategory && matchesCondition;
            });
            
            return filteredProducts;
        }

        // Update products based on filters
        function updateProducts() {
            const filteredProducts = filterProducts();
            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
            
            displayProducts(paginatedProducts);
            
            // Update navigation buttons
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = startIndex + itemsPerPage >= filteredProducts.length;
        }

        // Show product detail modal
        function showProductDetail(product) {
            modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="modal-details">
                    <h2 class="modal-title">${product.title}</h2>
                    <div class="modal-price">$${product.price}</div>
                    <p class="modal-description">${product.description}</p>
                    
                    <div class="modal-specs">
                        <h3 class="specs-title">Specifications</h3>
                        <ul class="specs-list">
                            ${Object.entries(product.specs).map(([key, value]) => `
                                <li><span>${key}:</span> <span>${value}</span></li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="btn btn-outline" onclick="addToCart(${product.id})">
                            <i class="far fa-heart"></i> Save for Later
                        </button>
                        <button class="btn btn-primary" onclick="addToCart(${product.id}, true)">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;
            
            productModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Add to cart function
        function addToCart(productId, showToast = false) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCart();
            
            if (showToast) {
                showToastMessage(`${product.title} added to cart!`);
            }
            
            // Prevent event bubbling
            event.stopPropagation();
        }

        // Remove from cart function
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showToastMessage('Item removed from cart');
        }

        // incerment cart quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        // Update cart UI
        function updateCart() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
                cartCount.textContent = '0';
                updateCartTotals();
                return;
            }
            
            let totalCount = 0;
            
            cart.forEach(item => {
                totalCount += item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-title">${item.title}</h3>
                        <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                            <div class="remove-item" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </div>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            cartCount.textContent = totalCount;
            updateCartTotals();
        }

        // Update cart totals
        function updateCartTotals() {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const shipping = subtotal > 0 ? 15 : 0;
            const tax = subtotal * 0.08; // 8% tax
            const total = subtotal + shipping + tax;
            
            cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            cartShipping.textContent = `$${shipping.toFixed(2)}`;
            cartTax.textContent = `$${tax.toFixed(2)}`;
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Show toast
        function showToastMessage(message) {
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Event listeners
        searchInput.addEventListener('input', () => {
            currentPage = 1;
            updateProducts();
        });

        priceRange.addEventListener('input', () => {
            currentPrice.textContent = priceRange.value;
        });

        applyFilters.addEventListener('click', () => {
            currentPage = 1;
            updateProducts();
        });

        gridView.addEventListener('click', () => {
            gridView.classList.add('active');
            listView.classList.remove('active');
            productsGrid.style.display = 'grid';
            productsList.style.display = 'none';
        });

        listView.addEventListener('click', () => {
            listView.classList.add('active');
            gridView.classList.remove('active');
            productsGrid.style.display = 'none';
            productsList.style.display = 'flex';
        });

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        nextBtn.addEventListener('click', () => {
            const filteredProducts = filterProducts();
            if ((currentPage * itemsPerPage) < filteredProducts.length) {
                currentPage++;
                updateProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        closeModal.addEventListener('click', () => {
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('open');
        });

        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
        });

        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                showToastMessage('Proceeding to checkout!');
                setTimeout(() => {
                    cart = [];
                    updateCart();
                    cartSidebar.classList.remove('open');
                }, 1500);
            } else {
                showToastMessage('Your cart is empty!');
            }
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Initialize
        updateProducts();
        updateCart();