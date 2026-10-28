// Function to handle Single Page View Switching (Home, About Us, Gallery)
function switchPage(pageId) {
    const views = document.querySelectorAll('.page-view');
    views.forEach(view => {
        view.classList.add('hidden');
    });

    const targetView = document.getElementById(`view-${pageId}`);
    if (targetView) {
        targetView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    if (event && event.currentTarget && event.currentTarget.classList) {
        event.currentTarget.classList.add('active');
    }
}

// Toggle Main Mandatory Disclosure Dropdown
function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('disclosureDropdown');
    dropdown.classList.toggle('show');
}

// Toggle Nested Sub-menus (Certificates / Others)
function toggleNested(event) {
    event.stopPropagation();
    const parentNested = event.currentTarget.closest('.nested-dropdown');
    const nestedMenu = parentNested.querySelector('.nested-menu');
    
    // Toggle active state
    nestedMenu.classList.toggle('show');
    
    const icon = event.currentTarget.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-chevron-right');
        icon.classList.toggle('fa-chevron-down');
    }
}

// Close dropdowns when clicking outside
window.addEventListener('click', () => {
    const dropdown = document.getElementById('disclosureDropdown');
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }

    const openNested = document.querySelectorAll('.nested-menu.show');
    openNested.forEach(menu => {
        menu.classList.remove('show');
        const icon = menu.previousElementSibling.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    });
});

// Mobile menu toggle logic
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            if (navbar.style.display === 'flex') {
                navbar.style.display = 'none';
            } else {
                navbar.style.display = 'flex';
                navbar.style.flexDirection = 'column';
                navbar.style.position = 'absolute';
                navbar.style.top = '100%';
                navbar.style.left = '0';
                navbar.style.width = '100%';
                navbar.style.background = 'white';
                navbar.style.padding = '1rem';
                navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        });
    }
});