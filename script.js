
/* ── TECH REGISTRY
   Single source of truth for icon class, brand colour, and tag colour class.
   Used in card top rows AND the modal tech stack section.
──────────────────────────────────────────────────────────────────────── */
const TECH = {
    HTML: { fa: 'fab fa-html5', color: '#e34f26', iconCls: 'ti-html', tagCls: 'tag-html' },
    CSS: { fa: 'fab fa-css3-alt', color: '#1572b6', iconCls: 'ti-css', tagCls: 'tag-css' },
    JavaScript: { fa: 'fab fa-js', color: '#f7df1e', iconCls: 'ti-js', tagCls: 'tag-js' },
    React: { fa: 'fab fa-react', color: '#61dafb', iconCls: 'ti-react', tagCls: 'tag-react' },
    'Node.js': { fa: 'fab fa-node-js', color: '#68a063', iconCls: 'ti-node', tagCls: 'tag-node' },
    WordPress: { fa: 'fab fa-wordpress', color: '#21759b', iconCls: 'ti-wp', tagCls: 'tag-wp' },
    TypeScript: { fa: 'fab fa-js', color: '#3178c6', iconCls: 'ti-ts', tagCls: 'tag-ts' },
    Elementor: { fa: 'fab fa-elementor', color: '#9203b2', iconCls: 'ti-elementor-pro', tagCls: 'tag-elementor-pro' },
    'Elementor Pro': { fa: 'fab fa-elementor', color: '#9203b2', iconCls: 'ti-elementor-pro', tagCls: 'tag-elementor-pro' },
    Hostinger: { fa: 'fas fa-globe', color: '#6736d5', iconCls: 'ti-hostinger', tagCls: 'tag-hostinger' },
    PHP: { fa: 'fab fa-php', color: '#777bb4', iconCls: 'ti-php', tagCls: 'tag-php' },
    MySQL: { fa: 'fas fa-database', color: '#00758f', iconCls: 'ti-mysql', tagCls: 'tag-mysql' },
    AJAX: { fa: 'fas fa-sync-alt', color: '#2c9cd4', iconCls: 'ti-ajax', tagCls: 'tag-ajax' },
};

/* ── PROJECT DATA ──────────────────────────────────────────────────── */
const PROJECTS = [
    {
        id: 1, mainIcon: 'fas fa-utensils', category: 'JavaScript',
        name: 'MirchiHut - Premium Desi Fast Food',
        short: 'Zero-backend food ordering with WhatsApp integration and real-time cart.',
        about: 'A complete zero-backend e-commerce website for a Pakistani fast food restaurant. Replaces costly WordPress hosting with a free static solution. Features dynamic menu, real-time search, category filtering, shopping cart, and WhatsApp order confirmation.',
        features: [
            'Dynamic menu from a central JavaScript data layer',
            'Real-time search and multi-category filtering with smooth scroll buttons',
            'Shopping cart drawer with quantity management and running totals',
            'Product detail modal with recommendations and image viewer',
            'WhatsApp order integration with auto-formatted order slip',
            'Shop hours configuration with delivery fee calculation (free above Rs. 1000)',
            'Mobile-first responsive design with touch-optimized interactions'
        ],
        learnings: [
            'Building a complete e-commerce app with zero backend using only vanilla JavaScript',
            'Managing cart state in-memory without frameworks or external libraries',
            'Implementing real-time search and multi-category filtering without page reload',
            'Creating WhatsApp API integration for order processing without payment gateways',
            'Designing mobile-first responsive layouts that work from 320px to 4K screens',
            'Optimizing performance to achieve 95+ Lighthouse score with ~150KB bundle size',
            'Implementing shop hours logic with timezone support and toast notifications'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/mirchihut',
        demo: 'https://mabbasdev.github.io/mirchihut/',
        thumbnail: 'assets/img/mirchihut.png'
    },
    {
        id: 2, mainIcon: 'fas fa-stopwatch', category: 'JavaScript',
        name: 'JavaScript Stopwatch',
        short: 'Modern stopwatch with lap tracking and clean vanilla JS UI.',
        about: 'A fully functional stopwatch application built with vanilla JavaScript featuring lap tracking, dynamic UI updates, and a polished responsive design. Demonstrates state-driven UI development with real-time timer logic and interactive components.',
        features: [
            'Start, pause, and reset timer functionality',
            'Lap recording system with dynamic history panel',
            'Real-time lap counter badge',
            'Clear all laps functionality',
            'Prevents duplicate lap entries',
            'Digital-style font (Orbitron) for authentic timer feel',
            'Custom scrollable lap history panel'
        ],
        learnings: [
            'Managing time-based logic using setInterval and clearInterval without timing drift',
            'Preventing multiple overlapping intervals with defensive programming and state control',
            'Dynamically rendering lap history from arrays using createElement and DOM manipulation',
            'Handling edge cases like resetting while timer runs and clearing laps without breaking UI',
            'Building a complete interactive system focusing on state management and behavior, not just visuals',
            'Synchronizing UI and internal data perfectly during real-time updates'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/js-stopwatch',
        demo: 'https://mabbasdev.github.io/js-stopwatch/',
        thumbnail: 'assets/img/stopwatch.png'
    },
    {
        id: 3, mainIcon: 'fas fa-play-circle', category: 'HTML/CSS',
        name: 'YouTube UI Clone',
        short: 'A fully responsive and feature-rich front-end clone of YouTube, built using HTML, CSS, JavaScript',
        about: 'A fully responsive and feature-rich front-end clone of YouTube built with HTML, CSS, JavaScript. It replicates the real YouTube interface including Home, Watch, Search, Playlist, and Channel pages, my custom signup and login pages improved my logic and JS fundamentals at different levels.',
        features: [
            'Complete UI for Home, Watch, Search, Playlist, and Channel pages',
            'Working authentication system with signup, login, logout, and protected routes',
            'Responsive mobile-friendly design with sidebar toggle and collapsible menus',
            'Login, Signup, and Forgot Password pages with form validation'
        ],
        learnings: [
            'Structuring multi-page PHP apps with clean separation of concerns',
            'Implementing secure password hashing with password_hash() and password_verify()',
            'Managing user sessions and protecting routes from unauthenticated access',
            'Building responsive YouTube-style grid layouts with CSS Grid and Flexbox',
            'Creating collapsible sidebars and mobile-first navigation menus',
            'Replicating real-world UI patterns like video cards with view counts and channel avatars'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/youtube-ui-clone',
        demo: 'https://youtube-ui-clone-mu.vercel.app/',
        thumbnail: 'assets/img/youtube-ui-clone.png'
    },
    {
        id: 4,
        mainIcon: 'fas fa-check-double',
        category: 'JavaScript',
        name: 'Todo App',
        short: 'Clean todo list app with local storage persistence and task management.',
        about: 'A clean, minimal todo list application built with HTML, CSS, and vanilla JavaScript. Features add, complete, and delete tasks with local storage persistence. Built as a hands-on project to master DOM manipulation and state management.',
        features: [
            'Add new tasks to the list',
            'Mark tasks as complete/incomplete with visual feedback',
            'Delete individual tasks',
            'Local storage persistence (saves tasks between browser sessions)',
            'Clean, minimal card-based UI',
            'Custom scrollbar styling for better UX'
        ],
        learnings: [
            'Implementing CRUD operations (Create, Read, Update, Delete) in vanilla JavaScript',
            'Working with localStorage to persist user data across browser sessions',
            'Dynamically rendering tasks from array state to DOM',
            'Handling task completion toggle with visual strikethrough styling',
            'Managing DOM events for adding, checking, and deleting tasks',
            'Creating a clean separation between data state and UI representation'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/js-todolist',
        demo: 'https://mabbasdev.github.io/js-todolist/',
        thumbnail: 'assets/img/todolist.png'
    },
    {
        id: 5,
        mainIcon: 'fas fa-palette',
        category: 'JavaScript',
        name: 'CSS Gradient Generator',
        short: 'Random gradient generator with live preview and one-click CSS copy.',
        about: 'A lightweight browser-based gradient generator tool that lets you create random linear gradients and copy CSS code instantly. Built with vanilla JavaScript to help designers find matching gradient colors quickly without opening design tools.',
        features: [
            'Independent left/right color randomization (lock one side, randomize the other)',
            'Live gradient preview that updates in real time',
            'One-click CSS copy with Clipboard API integration',
            'Visual feedback on copy button (green flash + "Copied!" text)',
            'Minimal UI with no unnecessary controls',
            'Random 6-digit hex color generation from scratch'
        ],
        learnings: [
            'Building hex color generator manually using character set iteration instead of toString(16)',
            'Implementing Clipboard API with navigator.clipboard.writeText() for copy functionality',
            'Managing button state reset timing with setTimeout for optimal UX feedback',
            'Keeping color state in sync with shared variables to prevent preview and code mismatch',
            'Creating independent color randomization while maintaining gradient string consistency',
            'Using template literals to build dynamic linear-gradient() strings'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/js-gradient-generator',
        demo: 'https://mabbasdev.github.io/js-gradient-generator/',
        thumbnail: 'assets/img/js-gradient-generator.png'
    },
    {
        id: 6,
        name: 'Atlas Portfolio',
        category: 'JavaScript',
        mainIcon: 'fas fa-user-astronaut',
        short: 'Modern responsive portfolio with theme switching and typing animation.',
        about: 'A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features dark/light mode, 5 color themes, typing animation, skills progress bars, and smooth navigation. No frameworks, just clean vanilla code.',
        features: [
            'Responsive sidebar (fixed on desktop, hamburger menu on mobile)',
            'Dark/Light mode toggle with persistent state',
            '5 color themes (Red, Blue, Orange, Green, Pink)',
            'Typing animation on home section using Typed.js',
            'Skills progress bars for technical skills visualization',
            'Ripple effect on navigation clicks',
            'Smooth scroll navigation between sections',
            'Contact form UI with functional layout'
        ],
        learnings: [
            'Managing multiple theme systems (dark/light mode + 5 color skins) with CSS variables',
            'Implementing responsive sidebar that transforms from fixed to hamburger menu',
            'Integrating Typed.js library for dynamic text animation on homepage',
            'Creating style switcher functionality with persistent theme preferences',
            'Building skills progress bars with visual percentage representation',
            'Adding ripple effect on click events for interactive feedback',
            'Using CSS Grid and Flexbox for complex responsive layouts',
            'Managing z-index layers for sidebar, theme switcher, and overlay elements'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/04-atlas-portfolio',
        demo: 'https://mabbasdev.github.io/04-atlas-portfolio/',
        thumbnail: 'assets/img/atlas-portfolio.png'
    },
    {
        id: 8,
        name: 'Movie Website UI',
        mainIcon: 'fas fa-film',
        category: 'JavaScript',
        short: 'Sleek movie browsing UI with movie grid, ratings, and dark mode.',
        about: 'A sleek, responsive movie browsing UI inspired by modern streaming platforms like Netflix, Hulu, and IMDb. Built with HTML, CSS, and vanilla JavaScript. Features trending movie grid, rating display, hover interactions, and dark/light mode toggle.',
        features: [
            'Hero section with trending movie highlights',
            'Movie grid with poster images, titles, ratings, and release dates',
            'Detail card hover revealing additional info or action buttons',
            'Fully responsive across mobile, tablet, and desktop screen sizes',
            'Dark/Light mode toggle for better user experience',
            'Smooth UI animations, transitions, and hover effects'
        ],
        learnings: [
            'Building a Netflix-style movie browsing interface from scratch with vanilla code',
            'Creating responsive movie card grids using CSS Grid and Flexbox',
            'Implementing hover states that reveal additional card information',
            'Designing hero sections with featured content and call-to-action',
            'Adding dark/light mode toggle with smooth theme switching',
            'Structuring UI animations and transitions for engaging user interactions'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/movie-website-ui',
        demo: 'https://movie-website-ui.vercel.app/',
        thumbnail: 'assets/img/movie-website-ui.png'
    },
    {
        id: 8,
        name: 'vCard Portfolio',
        category: 'HTML/CSS',
        mainIcon: 'fas fa-id-card',
        short: 'Digital business card style portfolio with clean card-based layout.',
        about: 'A modern digital business card style portfolio website built with vanilla HTML, CSS, and JavaScript. Presents developer information including profile, skills, and contact details in a clean, card-based layout perfect for sharing via link.',
        features: [
            'Digital vCard-style portfolio layout',
            'Clean, professional card-based design',
            'Responsive across all device sizes',
            'Profile information with avatar and bio',
            'Skills section with visual representation',
            'Contact information and social links',
            'Modern typography and spacing system'
        ],
        learnings: [
            'Structuring a professional vCard-style portfolio with semantic HTML',
            'Creating responsive card layouts that work on mobile and desktop',
            'Implementing clean CSS organization with proper spacing and typography',
            'Designing a digital business card aesthetic for professional branding',
            'Organizing portfolio content for easy customization and reuse'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/mabbasdev/vcard-portfolio-remastered',
        demo: 'https://vcard-portfolio-remastered.vercel.app/',
        thumbnail: 'assets/img/vcard-portfolio.png'
    },
    {
        id: 9,
        name: 'MediaZen Agency',
        mainIcon: 'fab fa-wordpress',
        category: 'WordPress',
        short: 'Multi-page digital agency site built with Elementor, deployed on Hostinger.',
        about: 'A custom multi-page digital marketing agency website built from scratch using WordPress Hello theme and Elementor. No demo imports or pre-made themes. Production-ready and deployed on Hostinger. Features service sections, pricing plans, testimonial carousel, animated counters, and FAQ components with custom CSS.',
        features: [
            'Multi-page architecture (Home, Services, About, Contact etc.)',
            'Hero section with value proposition and call-to-action',
            'Animated statistics counter (clients, experts, campaigns)',
            'Services overview section with hover effects',
            'Partner showcase carousel',
            'Testimonial slider with client reviews and ratings',
            'Three-tier pricing plan cards (Personal, Business, Enterprise)',
            'FAQ accordion section with expandable questions',
            'Production-ready deployment on Hostinger'
        ],
        learnings: [
            'Building a complete multi-page agency website from scratch using only Hello theme + Elementor',
            'Creating custom layouts without importing any demo content or pre-made templates',
            'Implementing animated counter elements using Elementor’s built-in features',
            'Designing responsive pricing cards with custom CSS styling',
            'Building testimonial carousels and partner showcases with Elementor',
            'Writing custom CSS to override and enhance Elementor’s default styling',
            'Structuring FAQ sections with accordion functionality for better UX',
            'Deploying a production-ready WordPress site on Hostinger with proper configuration'
        ],
        tech: ['WordPress', 'CSS', 'Elementor Pro', 'Hostinger'],
        github: '#',
        demo: 'https://mediazen.gatherknow.com/',
        thumbnail: 'assets/img/mediazen.png'
    }, {
        id: 10,
        mainIcon: 'fas fa-newspaper',
        category: 'WordPress',
        name: 'Metro Mail News',
        short: 'Minimalist digital newspaper platform with image mapping for article linking.',
        about: 'A simple digital newspaper website built with Soledad WordPress theme based on client specifications requesting a minimalist design. Features custom-coded image mapping technology that lets users highlight and click newspaper sections to navigate directly to related articles.',
        features: [
            'Clean, simple minimalist design as requested by client',
            'Image mapping technology to highlight newspaper sections',
            'Clickable mapped areas linking to specific articles',
            'Newspaper download button for PDF versions',
            'Minimalist magazine layout for easy reading',
            'Mobile-responsive newspaper viewing'
        ],
        learnings: [
            'Building two versions of same project based on different requirements',
            'Customizing Soledad theme for minimalist newspaper layout',
            'Reusing image mapping code across both versions',
            'Understanding client requirements and delivering simple UI',
            'Creating download functionality for newspaper content',
            'Working with WordPress custom code without breaking theme updates'
        ],
        tech: ['WordPress', 'CSS', 'JavaScript', 'Hostinger'],
        github: '#',
        demo: 'https://simplemetro.gatherknow.com/',
        thumbnail: 'assets/img/metromail.png'
    },
    {
        id: 11,
        mainIcon: 'fas fa-phone-alt',
        category: 'JavaScript',
        name: 'Lead Capture - Jornaya Integration',
        short: 'Lead verification tool with Google Sheets integration for call center CRM.',
        about: 'A lead verification tool for call centers integrating Jornaya, Trusted Forms, and Google Sheets. Generates verified lead IDs and pushes data directly to organized spreadsheets. CRM-ready format saves thousands compared to buying paid verified leads.',
        features: [
            'Jornaya API integration for lead verification',
            'Trusted Forms ID generation for compliance tracking',
            'Real-time Google Sheets data push on form submission',
            'Well-organized spreadsheet format for easy CRM extraction',
            'Simple landing page with consent checkbox',
            'Cost-saving alternative to purchasing paid verified leads',
            'Improved call center efficiency with direct lead flow'
        ],
        learnings: [
            'Integrating Jornaya API for lead compliance verification',
            'Implementing Trusted Forms ID generation workflow',
            'Connecting Google Sheets API for real-time data push',
            'Structuring spreadsheet data for seamless CRM integration',
            'Building cost-effective lead generation system from scratch',
            'Reducing business costs by replacing paid verified lead services',
            'Creating simple UI that handles complex API orchestration',
            'Understanding call center lead verification and compliance requirements'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: 'https://call.gatherknow.com/',
        thumbnail: 'assets/img/trustedforms.png'
    },
    {
        id: 12,
        mainIcon: 'fas fa-building',
        category: 'WordPress',
        name: 'WinWin Real Estate Redesign',
        short: `Complete WordPress redesign of Pakistan's WinWin real estate company website.`,
        about: `A complete WordPress redesign of Pakistan's million-dollar real estate company WinWin.com.pk using Elementor. Fixed completely broken mobile layout, improved desktop experience, added premium branding. Features property listings, interactive real estate map with locations, agent directory, and call back functionality.`,
        features: [
            'Complete responsive redesign using WordPress + Elementor',
            'Premium branding that reflects actual company identity',
            'Property listings for rent, sale, and purchase categories',
            'Interactive real estate map with property locations',
            'Agent directory and team profiles with contact info',
            'Request call back functionality',
            'Recent highlights and news section',
            'Premium projects showcase',
            'Fully functional contact section'
        ],
        learnings: [
            'Redesigning a million-dollar company website with WordPress + Elementor',
            'Fixing completely broken mobile layouts while preserving content structure',
            'Creating premium visual branding that reflects existing company identity',
            'Integrating interactive real estate maps with property location markers',
            'Building comprehensive property listing system with multiple categories',
            'Structuring agent directory with profiles and contact information',
            'Understanding client rejection (they preferred social media over website)',
            'Completing full projects at premium quality even when clients don\'t buy'
        ],
        tech: ['WordPress', 'Elementor Pro', 'CSS'],
        github: '#',
        demo: 'https://winwin.gatherknow.com/',
        thumbnail: 'assets/img/winwin.png'
    },
    {
        id: 13,
        mainIcon: 'fab fa-youtube',
        category: 'PHP',
        name: 'YouTube Thumbnail Downloader',
        short: 'Extract and download YouTube video thumbnails in max resolution using PHP cURL.',
        about: 'A YouTube thumbnail downloader tool that extracts and downloads max resolution thumbnails from any YouTube video URL. Supports both youtube.com/watch and youtu.be URL formats. Built with vanilla JavaScript for frontend logic and PHP cURL for secure image downloading.',
        features: [
            'Extract video ID from YouTube URLs (youtube.com/watch and youtu.be formats)',
            'Real-time thumbnail preview as user types',
            'Supports direct image URL pasting for any image type',
            'Download high-quality maxresdefault thumbnails',
            'PHP cURL backend for secure image fetching',
            'Responsive design for mobile and desktop',
            'Visual preview area with icon and text states'
        ],
        learnings: [
            'Extracting YouTube video IDs using string manipulation (split and substring methods)',
            'Building YouTube thumbnail URLs using video ID and maxresdefault endpoint',
            'Implementing real-time preview with JavaScript keyup events',
            'Using PHP cURL to fetch and download images from external URLs',
            'Setting proper HTTP headers for file download (Content-Disposition)',
            'Handling multiple URL formats (standard and youtu.be shortcuts)',
            'Creating conditional UI states (active/inactive preview area)',
            'Validating image URLs with regex pattern matching'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        github: 'https://github.com/mabbasdev/js-yt-thumbnail-downloader',
        demo: 'https://thumbnail.gatherknow.com/',
        thumbnail: 'assets/img/thumbnail-downloader.png'
    },
    {
        id: 14,
        mainIcon: 'fas fa-comments',
        category: 'PHP',
        name: 'Realtime Chat App',
        short: 'Full-featured realtime chat app with PHP, MySQL, and AJAX polling.',
        about: 'A full-featured realtime chat application built with PHP, MySQL, and vanilla JavaScript. Features user authentication, profile image uploads, real-time messaging using AJAX polling, persistent chat history, online/offline user status, and responsive design.',
        features: [
            'User signup and login with secure password hashing',
            'Profile image upload during registration',
            'Real-time messaging with AJAX polling (no page refresh)',
            'User list with online/offline status indicators',
            'Persistent chat history stored in MySQL database',
            'Search users to find and start conversations',
            'Session-based authentication with protected routes',
            'Fully responsive design for mobile and desktop'
        ],
        learnings: [
            'Building complete authentication system with PHP sessions and password_hash()',
            'Achieving real-time functionality without WebSockets using AJAX polling',
            'Handling secure file uploads with validation (type, size, unique naming)',
            'Designing MySQL database schema for one-to-many messaging relationships',
            'Implementing asynchronous message sending/receiving with XMLHttpRequest',
            'Managing user sessions and protecting routes from unauthorized access',
            'Creating responsive chat UI that works across all devices',
            'Writing efficient database queries for chat history retrieval'
        ],
        tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'AJAX'],
        github: 'https://github.com/mabbasdev/chat-app',
        demo: 'https://chat-app.gatherknow.com/',
        thumbnail: 'assets/img/chat-app.png',
    }
];

/* ── CATEGORIES ─────────────────────────────────────────────────────── */
const CATS = ['All', 'JavaScript', 'PHP', 'HTML/CSS', 'WordPress'];
const CAT_ICON = {
    All: '<i class="fas fa-border-all"></i>',
    JavaScript: '<i class="fab fa-js"></i>',
    PHP: '<i class="fab fa-php"></i>',
    'HTML/CSS': '<i class="fab fa-html5"></i>',
    WordPress: '<i class="fab fa-wordpress"></i>'
};

let activeFilter = 'All';
let searchQ = '';

function getCounts() {
    const out = {};
    CATS.forEach(c => { out[c] = c === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === c).length; });
    return out;
}

/* ── RENDER FILTERS ─────────────────────────────────────────────────── */
function renderFilters() {
    const counts = getCounts();
    document.getElementById('catFilters').innerHTML = CATS.map(c => `
        <button class="cat-btn ${c === activeFilter ? 'active' : ''}" onclick="setFilter('${c}')">
            ${CAT_ICON[c]} ${c} <span class="cat-count">${counts[c]}</span>
        </button>`).join('');
}
function setFilter(cat) { activeFilter = cat; renderFilters(); renderProjects(); }

/* ── CARD TECH ROW — brand-colour icons ─────────────────────────────── */
function cardTechIcons(techList) {
    return techList.map(name => {
        const t = TECH[name];
        return t ? `<i class="${t.fa} ${t.iconCls}" title="${name}" style="color:${t.color}"></i>` : '';
    }).join('');
}

/* ── MODAL TECH ROW — icon + label pill ─────────────────────────────── */
function modalTechPills(techList) {
    return techList.map(name => {
        const t = TECH[name];
        return t
            ? `<span class="modal-tech-item"><i class="${t.fa}" style="color:${t.color}"></i> ${name}</span>`
            : `<span class="modal-tech-item">${name}</span>`;
    }).join('');
}

/* ── TAG BADGE ──────────────────────────────────────────────────────── */
function tagBadge(name) {
    const t = TECH[name];
    return `<span class="tag ${t ? t.tagCls : ''}">${name}</span>`;
}

/* ── FILTER ─────────────────────────────────────────────────────────── */
function getFiltered() {
    return PROJECTS.filter(p => {
        const matchCat = activeFilter === 'All' || p.category === activeFilter;
        const q = searchQ.toLowerCase();
        const matchSrch = !q || p.name.toLowerCase().includes(q)
            || p.short.toLowerCase().includes(q)
            || p.tech.some(t => t.toLowerCase().includes(q));
        return matchCat && matchSrch;
    });
}

/* ── RENDER PROJECTS ────────────────────────────────────────────────── */
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const filtered = getFiltered();
    const count = filtered.length;

    document.getElementById('secCount').textContent = `${count} project${count !== 1 ? 's' : ''}`;
    document.getElementById('secTitle').innerHTML =
        activeFilter === 'All' ? 'All <span>Projects</span>' : `<span>${activeFilter}</span> Projects`;
    if (!count) {
        grid.innerHTML = `<div class="empty-state">
            <div class="empty-icon"><i class="fas fa-search"></i></div>
            <h3 class="empty-title">No projects found</h3>
            <p class="empty-text">Try a different search term or category filter</p>
        </div>`;
        return;
    }
    grid.innerHTML = filtered.map((p, i) => `
    <div class="p-card card-in" style="animation-delay:${i * 0.05}s"
        onclick="openModal(${p.id})" tabindex="0" role="button"
        aria-label="View ${p.name} details"
        onkeydown="if(event.key==='Enter')openModal(${p.id})">
        
        <div class="card-top">
            <div class="card-top-pattern" id="thumbnailArea"
            style="background-image: url('${p.thumbnail}');"></div>
            
        </div>
        <div class="card-body">
            <div class="card-name">${p.name}</div>
            <div class="card-desc">${p.short}</div>
            <div class="card-tags">${p.tech.map(tagBadge).join('')}</div>
        </div>
        <div class="card-foot">
            <a href="${p.github}" target="_blank" class="c-btn c-btn-gh"   onclick="event.stopPropagation()"><i class="fab fa-github"></i> GitHub</a>
            <a href="${p.demo}"   target="_blank" class="c-btn c-btn-demo" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Demo</a>
        </div>
    </div>`).join('');


}
// <div class="card-main-icon"><i class="${p.mainIcon}"></i></div>
// <div class="card-tech-row">${cardTechIcons(p.tech)}</div>
// <span class="card-cat-badge">${p.category}</span>
/* ── MODAL ──────────────────────────────────────────────────────────── */
function openModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;

    document.getElementById('mIconEl').className = p.mainIcon;
    document.getElementById('mName').textContent = p.name;
    document.getElementById('mMeta').textContent = `${p.tech.join(', ')}`;
    document.getElementById('mAbout').textContent = p.about;
    document.getElementById('mFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('mTechRow').innerHTML = modalTechPills(p.tech);
    document.getElementById('mGhBtn').href = p.github;
    document.getElementById('mDemoBtn').href = p.demo;

    /* ── ADD LEARNINGS SECTION ── */
    const learningsSec = document.getElementById('mLearnings');

    if (p.learnings && p.learnings.length > 0) {
        if (learningsSec) {
            // Update existing section
            learningsSec.style.display = 'block';
            const learningsList = learningsSec.querySelector('.modal-features');
            if (learningsList) {
                learningsList.innerHTML = p.learnings.map(l => `<li> ${l}</li>`).join('');
            }
        } else {
            // Create new section if it doesn't exist
            const techSec = document.querySelector('.modal-sec:last-child');
            const learningsHtml = `
                <div class="modal-sec" id="mLearnings">
                    <div class="modal-sec-label">What I Learned</div>
                    <ul class="modal-features">
                        ${p.learnings.map(l => `<li> ${l}</li>`).join('')}
                    </ul>
                </div>
            `;
            techSec.insertAdjacentHTML('beforebegin', learningsHtml);
        }
    } else {
        // Hide the learnings section if project has no learnings
        if (learningsSec) {
            learningsSec.style.display = 'none';
        }
    }

    /* Re-trigger animation cleanly on repeated opens */
    const box = document.querySelector('.modal-box');
    box.style.animation = 'none';
    void box.offsetWidth; /* force reflow */
    box.style.animation = '';

    document.getElementById('projectModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementById('closeModal').focus();
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';

    /* Optional: Remove learnings section on close to avoid duplicates on next open */
    const learningsSec = document.getElementById('mLearnings');
    if (learningsSec && !learningsSec.hasAttribute('data-permanent')) {
        learningsSec.remove();
    }
}
/* ── SEARCH ─────────────────────────────────────────────────────────── */
function setupSearch() {
    const inp = document.getElementById('searchInput');
    const clrB = document.getElementById('clearSearch');
    inp.addEventListener('input', e => {
        searchQ = e.target.value;
        clrB.style.display = searchQ ? 'flex' : 'none';
        renderProjects();
    });
    clrB.addEventListener('click', () => {
        searchQ = ''; inp.value = '';
        clrB.style.display = 'none';
        renderProjects(); inp.focus();
    });
}

/* ── WIRING ─────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProjects();
    setupSearch();

    /* Scroll top */
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    }, { passive: true });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* Header shadow */
    const hdr = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        hdr.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* Modal close */
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    /* Hero button */
    document.getElementById('heroBrowseBtn').addEventListener('click', () => {
        document.querySelector('.projects-wrap').scrollIntoView({ behavior: 'smooth' });
    });

});
[]