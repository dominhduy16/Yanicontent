class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(11, 31, 23, 0.95);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #E6F4EE;
                    text-decoration: none;
                }

                .logo span {
                    color: #5EE0B6;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-links a {
                    color: #C7D7D1;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }

                .nav-links a:hover {
                    color: #5EE0B6;
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #5EE0B6;
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #C7D7D1;
                    cursor: pointer;
                }

                .mobile-menu {
                    display: none;
                    position: fixed;
                    top: 72px;
                    left: 0;
                    right: 0;
                    background-color: #0F2A20;
                    padding: 2rem;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }

                .mobile-menu.active {
                    display: block;
                }

                .mobile-menu-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .mobile-menu-links a {
                    color: #C7D7D1;
                    text-decoration: none;
                    font-size: 1.1rem;
                }

                .mobile-menu-links a:hover {
                    color: #5EE0B6;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }

                    .header-container {
                        padding: 1rem;
                    }
                }
            </style>

            <div class="header-container">
                <a href="index.html" class="logo">
                   Yani<span>Content</span>
                </a>

                <nav class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="pricing.html">Bảng Giá</a>
                    <a href="blog.html">Blog</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                </nav>

                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
                    <i data-feather="menu"></i>
                </button>
            </div>

            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-menu-links">
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="pricing.html">Bảng Giá</a>
                    <a href="blog.html">Blog</a>
                    <a href="about.html">About</a>
                </div>
            </div>
        `;

    const mobileMenuBtn = this.shadowRoot.getElementById("mobileMenuBtn");
    const mobileMenu = this.shadowRoot.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      if (window.feather) feather.replace();
    });

    this.shadowRoot.querySelectorAll(".mobile-menu-links a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });

    // Render icons on load
    if (window.feather) feather.replace();
  }
}

customElements.define("custom-header", CustomHeader);
