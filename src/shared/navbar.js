import './navbar.css';

export function initNavbar() {
    // Check if navbar already exists
    if (document.getElementById('shared-navbar')) return;

    const navbar = document.createElement('nav');
    navbar.id = 'shared-navbar';

    const getPath = (path) => {
        // Determine strict path for links. 
        // Assuming deployed at root /.
        return path;
    };

    // Define links
    // Adjust paths to match the Vite structure
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Marquee', path: '/src/marquee/index.html' },
        { name: 'Grid Card', path: '/src/gridcard/index.html' }
    ];

    let currentPath = window.location.pathname;

    let html = `<div class="nav-logo">GSAP Demos</div>`;

    pages.forEach((page, index) => {
        // Basic active state check
        // Normalize paths (remove trailing slash for comparison)
        const isActive = currentPath === page.path ||
            (page.path !== '/' && currentPath.includes(page.path)) ||
            (page.path === '/' && currentPath === '/index.html');

        if (index > 0) {
            html += `<div class="nav-separator"></div>`;
        }
        html += `<a href="${page.path}" class="nav-link ${isActive ? 'active' : ''}">${page.name}</a>`;
    });

    navbar.innerHTML = html;
    document.body.appendChild(navbar);
}

// Auto-init specific to browser
if (typeof window !== 'undefined') {
    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
}
