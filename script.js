document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT ---
    let state = {
        language: localStorage.getItem('language') || 'en',
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
        currentPage: 'home',
        toolId: null,
    };

    // --- DOM ELEMENTS ---
    const app = document.getElementById('app');
    const headerEl = document.getElementById('main-header');
    const footerEl = document.getElementById('main-footer');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const docElement = document.documentElement;

    // --- TRANSLATIONS (Mini i18n) ---
    const translations = {
        en: {
            siteName: "AI Tools Hub", searchPlaceholder: "Search AI tools...", heroTitle: "Discover the Best AI Tools", allCategories: "All", tryFree: "Try Free", reviews: "Reviews", pricing: "Pricing", sponsored: "Sponsored", categories: { writing: "Content Writing", image: "Image Generation", video: "Video Creation", audio: "Audio Tools", productivity: "Productivity", developer: "Developer Tools", '3d': "3D Generation" },
        },
        ar: {
            siteName: "مركز أدوات الذكاء الاصطناعي", searchPlaceholder: "ابحث عن أدوات الذكاء الاصطناعي...", heroTitle: "اكتشف أفضل أدوات الذكاء الاصطناعي", allCategories: "الكل", tryFree: "جرّب مجانًا", reviews: "مراجعات", pricing: "التسعير", sponsored: "ممَوَّل", categories: { writing: "كتابة المحتوى", image: "توليد الصور", video: "إنشاء الفيديو", audio: "أدوات الصوت", productivity: "الإنتاجية", developer: "أدوات المطورين", '3d': "توليد ثلاثي الأبعاد" },
        }
    };
    const t = (key) => translations[state.language][key] || key;
    const tCat = (key) => translations[state.language].categories[key] || key;

    // --- RENDER FUNCTIONS ---
    
    const renderToolCard = (tool) => {
        const lang = state.language;
        const sponsoredTag = tool.isSponsored
            ? `<div class="absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                 <i class="fa-solid fa-crown fa-xs"></i>
                 <span>${t('sponsored')}</span>
               </div>`
            : '';

        return `
            <div class="relative bg-light-card dark:bg-dark-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-4 transform hover:-translate-y-1">
                ${sponsoredTag}
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2 flex-shrink-0">
                        <img loading="lazy" alt="${tool.name[lang]}" src="${tool.logo}" class="max-h-full max-w-full object-contain"/>
                    </div>
                    <div class="overflow-hidden">
                        <h3 class="text-xl font-bold text-light-text dark:text-dark-text truncate">${tool.name[lang]}</h3>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full inline-block">
                            ${tCat(tool.category)}
                        </div>
                    </div>
                </div>
                
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed h-10">
                    ${tool.short_description[lang]}
                </p>

                <div class="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <i class="fas fa-star text-yellow-400"></i>
                    <span class="font-bold">${tool.rating}</span>
                    <span class="text-gray-500 dark:text-gray-400 text-sm">(${tool.reviewCount.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')} ${t('reviews')})</span>
                </div>

                <div class="text-sm text-gray-700 dark:text-gray-300">
                    <span class="font-bold">${t('pricing')}:</span> ${tool.pricing[lang]}
                </div>
                
                <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
                    <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="flex-grow text-center bg-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        <i class="fas fa-external-link-alt"></i> ${t('tryFree')}
                    </a>
                    <a href="#tool/${tool.id}" class="flex-shrink-0 text-center bg-gray-200 dark:bg-gray-600 text-light-text dark:text-dark-text font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                        ${t('reviews')}
                    </a>
                </div>
            </div>
        `;
    };
    
    const renderHomePage = () => {
        app.innerHTML = `
            <div id="tools-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${toolsData.map(renderToolCard).join('')}
            </div>
        `;
    };
    
    const renderHeaderAndFooter = () => {
        headerEl.innerHTML = `
            <div class="container mx-auto px-4 h-16 flex justify-between items-center">
                <a href="#" class="flex items-center gap-3 text-2xl font-bold text-light-text dark:text-dark-text">
                    <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-bolt text-white"></i>
                    </div>
                    <span>${t('siteName')}</span>
                </a>
                <div class="flex items-center gap-5">
                    <button id="lang-switcher" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                        <i class="fas fa-globe"></i>
                        <span>${state.language === 'en' ? 'العربية' : 'English'}</span>
                    </button>
                    <button id="theme-toggle" class="text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <i class="fas ${state.theme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
                    </button>
                    <button class="text-2xl text-gray-600 dark:text-gray-300 md:hidden">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>`;
        footerEl.innerHTML = `&copy; ${new Date().getFullYear()} ${t('siteName')}. All rights reserved.`;
    };
    
    // --- ROUTER & MAIN RENDER ---
    const render = () => {
        docElement.lang = state.language;
        docElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
        renderHeaderAndFooter();
        // For now, this version focuses on the main list page as per the image.
        // A full detail page would be the next step.
        renderHomePage();
        addGlobalEventListeners();
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    };
    
    // --- EVENT LISTENERS ---
    const addGlobalEventListeners = () => {
        document.getElementById('lang-switcher').addEventListener('click', () => {
            state.language = state.language === 'en' ? 'ar' : 'en';
            localStorage.setItem('language', state.language);
            render();
        });
        document.getElementById('theme-toggle').addEventListener('click', () => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
            docElement.classList.toggle('dark');
            render();
        });
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // --- INITIALIZATION ---
    window.addEventListener('scroll', handleScroll);
    render(); // Initial render
});
