// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer for Counter Animation
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    animateCounter(counter);
                    counter.classList.add('animated');
                }
            });
        }
    });
}, observerOptions);

// Observe statistics section
const statsSection = document.querySelector('.counter')?.closest('section');
if (statsSection) {
    observer.observe(statsSection);
}

// Load Portfolio Preview (Homepage only)
async function loadPortfolioPreview() {
    const portfolioContainer = document.getElementById('portfolio-preview');
    if (!portfolioContainer) return;

    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        const projects = data.projects.slice(0, 3); // Get first 3 projects

        portfolioContainer.innerHTML = projects.map(project => `
            <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
                <div class="h-80 overflow-hidden">
                    <img src="${project.image}"
                         alt="${project.title}"
                         class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                    <span class="text-orange-400 font-semibold text-sm mb-2">${project.category}</span>
                    <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
                    <p class="text-gray-200 text-sm mb-4">${project.location} • ${project.year}</p>
                    <a href="gallery.html" class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition w-fit">
                        Lihat Detail
                    </a>
                </div>
                <div class="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${project.budget}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading portfolio preview:', error);
        portfolioContainer.innerHTML = '<p class="text-center text-gray-400 col-span-3">Portfolio akan ditambah tidak lama lagi...</p>';
    }
}

// Load Full Gallery (Gallery page only)
async function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    const filterButtons = document.querySelectorAll('[data-filter]');
    let currentFilter = 'all';

    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        let projects = data.projects;

        const renderProjects = (filter = 'all') => {
            const filteredProjects = filter === 'all'
                ? projects
                : projects.filter(p => p.category === filter);

            galleryContainer.innerHTML = filteredProjects.map(project => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
                    <div class="h-64 overflow-hidden">
                        <img src="${project.image}"
                             alt="${project.title}"
                             class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    </div>
                    <div class="p-6">
                        <span class="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            ${project.category}
                        </span>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${project.title}</h3>
                        <p class="text-gray-600 text-sm mb-4 leading-relaxed">${project.description}</p>

                        <div class="space-y-2 mb-4">
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-map-marker-alt text-orange-500 w-5"></i>
                                <span>${project.location}</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-calendar text-orange-500 w-5"></i>
                                <span>${project.year}</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-clock text-orange-500 w-5"></i>
                                <span>${project.duration}</span>
                            </div>
                            <div class="flex items-center text-sm font-semibold text-orange-600">
                                <i class="fas fa-dollar-sign text-orange-500 w-5"></i>
                                <span>${project.budget}</span>
                            </div>
                        </div>

                        <div class="border-t pt-4">
                            <p class="text-xs text-gray-500 font-semibold mb-2">FEATURES:</p>
                            <ul class="space-y-1">
                                ${project.features.map(feature => `
                                    <li class="text-sm text-gray-600 flex items-start">
                                        <i class="fas fa-check text-green-500 mt-1 mr-2 text-xs"></i>
                                        <span>${feature}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('');

            // Update project count
            const countElement = document.getElementById('project-count');
            if (countElement) {
                countElement.textContent = filteredProjects.length;
            }
        };

        // Initial render
        renderProjects();

        // Filter button handlers
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                currentFilter = filter;

                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-orange-500', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700');
                });
                button.classList.remove('bg-white', 'text-gray-700');
                button.classList.add('bg-orange-500', 'text-white');

                // Render filtered projects
                renderProjects(filter);
            });
        });

    } catch (error) {
        console.error('Error loading gallery:', error);
        galleryContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-exclamation-triangle text-orange-500 text-4xl mb-4"></i>
                <p class="text-gray-600">Maaf, portfolio tidak dapat dimuatkan buat masa ini.</p>
            </div>
        `;
    }
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Menghantar...';
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(contactForm);

        try {
            // Replace with your Formspree endpoint
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                alert('✅ Terima kasih! Mesej anda telah berjaya dihantar. Kami akan menghubungi anda tidak lama lagi.');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Maaf, mesej gagal dihantar. Sila cuba lagi atau hubungi kami terus melalui WhatsApp.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioPreview();
    loadGallery();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
