        document.addEventListener('DOMContentLoaded', function() {
            // Header Sticky
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            });
            
            // Moile Menu Toggle
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                hamburger.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Smooth Scrolling for Navigation Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile men
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                });
            });
            
            // Portfolio Filtering
            const filterButtons = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Lightbox Functionality
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const lightboxTitle = document.getElementById('lightboxTitle');
            const lightboxDesc = document.getElementById('lightboxDesc');
            const lightboxClose = document.getElementById('lightboxClose');
            const lightboxPrev = document.getElementById('lightboxPrev');
            const lightboxNext = document.getElementById('lightboxNext');
            
            // Sample image data from internat shppingcart image is mine
            const portfolioData = [
                {
                    image: "shoppingcart.png",
                    title: "E-commerce Website",
                    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process."
                },
                {
                    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80",
                    title: "Fitness App",
                    description: "A cross-platform fitness application with workout tracking, progress analytics, and personalized recommendations."
                },
                {
                    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
                    title: "Banking Dashboard",
                    description: "A comprehensive financial dashboard with transaction history, spending analytics, and budget planning tools."
                },
                {
                    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                    title: "Corporate Website",
                    description: "A modern corporate website with interactive elements, blog integration, and multilingual support."
                },
                {
                    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                    title: "Food Delivery App",
                    description: "A food ordering and delivery application with real-time tracking, restaurant listings, and payment integration."
                },
                {
                    image: "https://images.unsplash.com/photo-1551909497-5d11dde2b70e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
                    title: "Travel Booking UI",
                    description: "A user-friendly travel booking interface with destination search, booking process, and itinerary management."
                }
            ];
            
            let currentIndex = 0;
            
            // Open lightbox when portfolio item is clicked
            portfolioItems.forEach((item, index) => {
                item.addEventListener('click', function() {
                    currentIndex = index;
                    updateLightboxContent();
                    lightbox.classList.add('open');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Close lightbox
            // Close lightbox
            lightboxClose.addEventListener('click', function() {
                lightbox.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
            
            // Navigate to previous item
            lightboxPrev.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
                updateLightboxContent();
            });
            
            // Navigate to next item
            lightboxNext.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % portfolioData.length;
                updateLightboxContent();
            });
            
            // Update lightbox content based on current index
            function updateLightboxContent() {
                const item = portfolioData[currentIndex];
                lightboxImage.src = item.image;
                lightboxTitle.textContent = item.title;
                lightboxDesc.textContent = item.description;
            }
            
            // Close lightbox when clicking outside content
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Animate skill bars on scroll
            // Animate skill bars on scroll
            // Animate skill bars on scroll
            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.skill-progress');
            
            function animateSkills() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
            


            const aboutSection = document.querySelector('.about');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkills();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(aboutSection);
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        });