class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #0B1F17;
                    color: #C7D7D1;
                    padding: 5rem 2rem 2rem; /* Tăng padding trên để thoáng hơn */
                    border-top: 1px solid rgba(94, 224, 182, 0.1);
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.2fr; /* Phân bổ không gian chuyên nghiệp */
                    gap: 4rem;
                }

                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #E6F4EE;
                    margin-bottom: 1.5rem;
                    display: inline-block;
                    text-decoration: none;
                }

                .footer-logo span { color: #5EE0B6; }

                .footer-about p {
                    font-size: 0.95rem;
                    line-height: 1.8;
                    color: #7A968B;
                    margin-bottom: 2rem;
                }

                /* Trust Badges */
                .trust-badges {
                    display: flex;
                    gap: 1.5rem;
                    opacity: 0.6;
                    filter: grayscale(1);
                    transition: 0.3s;
                }
                .trust-badges:hover { opacity: 1; filter: grayscale(0); }
                .trust-badges img { height: 35px; width: auto; }

                .footer-links h3, .footer-contact h3 {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #E6F4EE;
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .footer-links ul { list-style: none; padding: 0; }
                .footer-links li { margin-bottom: 1rem; }

                .footer-links a {
                    color: #7A968B;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;
                    display: inline-block;
                }

                .footer-links a:hover {
                    color: #5EE0B6;
                    transform: translateX(5px);
                }

                .footer-contact p {
                    margin-bottom: 1.2rem;
                    display: flex;
                    align-items: flex-start;
                    font-size: 0.95rem;
                    color: #7A968B;
                }

                .footer-contact i {
                    margin-right: 1rem;
                    color: #5EE0B6;
                    flex-shrink: 0;
                    width: 18px;
                }

                /* Legal Info Section */
                .legal-info {
                    font-size: 0.85rem;
                    color: #4A6359;
                    margin-top: 1rem;
                    border-top: 1px solid rgba(255,255,255,0.03);
                    padding-top: 1rem;
                }

                .footer-bottom {
                    max-width: 1200px;
                    margin: 4rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .social-links { display: flex; gap: 1.5rem; }
                .social-links a { color: #7A968B; transition: 0.3s; }
                .social-links a:hover { color: #5EE0B6; transform: translateY(-3px); }

                .copyright { font-size: 0.85rem; color: #4A6359; }

                @media (max-width: 1024px) {
                    .footer-container { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 640px) {
                    .footer-container { grid-template-columns: 1fr; gap: 3rem; }
                    .footer-bottom { flex-direction: column; gap: 2rem; text-align: center; }
                }
            </style>

            <div class="footer-container">
                <div class="footer-about">
                    <a href="index.html" class="footer-logo">
                        VietSEO<span>Content</span>
                    </a>
                    <p>
                        VietSEO Content là đơn vị tiên phong trong giải pháp nội dung chuẩn EEAT. 
                        Chúng tôi giúp doanh nghiệp B2B xây dựng vị thế chuyên gia (Authority) 
                        thông qua chiến lược nội dung bền vững.
                    </p>
                    <div class="trust-badges">
                        <img src="https://www.dmca.com/img/dmca-badge-w200-5x1-01.png" alt="DMCA Protected">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Partner">
                    </div>
                </div>

                <div class="footer-links">
                    <h3>Dịch vụ mũi nhọn</h3>
                    <ul>
                        <li><a href="services.html#strategic-content">Content SEO Chiến lược</a></li>
                        <li><a href="services.html#eeat-writing">Viết bài chuẩn EEAT</a></li>
                        <li><a href="services.html#audit">Audit & Tối ưu nội dung</a></li>
                        <li><a href="services.html#b2b">Content Marketing B2B</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h3>Về chúng tôi</h3>
                    <ul>
                        <li><a href="about.html">Triết lý nội dung</a></li>
                        <li><a href="blog.html">Thư viện tri thức</a></li>
                        <li><a href="contact.html">Yêu cầu báo giá</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                    </ul>
                </div>

                <div class="footer-contact">
                    <h3>Kết nối ngay</h3>
                    <p><i data-feather="mail"></i> contact@vietseocontent.com</p>
                    <p><i data-feather="phone"></i> +84 123 456 789 (Zalo)</p>
                    <p><i data-feather="map-pin"></i> Tòa nhà Innovation, Hà Nội, VN</p>
                    
                    <div class="legal-info">
                        MST: 0123456789 <br>
                        Giấy phép số: 123/GP-BTTTT cấp bởi Bộ Thông tin và Truyền thông.
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="copyright">
                    &copy; ${new Date().getFullYear()} VietSEO Content Master. All rights reserved.
                </p>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                    <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
                    <a href="#" aria-label="Zalo"><i data-feather="message-circle"></i></a>
                    <a href="#" aria-label="YouTube"><i data-feather="youtube"></i></a>
                </div>
            </div>
        `;

    if (window.feather) {
      feather.replace();
    }
  }
}

customElements.define("custom-footer", CustomFooter);
