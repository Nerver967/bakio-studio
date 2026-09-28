import React, { useState } from "react";

const stats = [
  {
    number: "0.8s",
    label: "Tốc độ phản hồi trung bình",
    desc: "Tải trang siêu tốc chuẩn Core Web Vitals, không mã thừa.",
  },
  {
    number: "100%",
    label: "Thiết kế độc bản, không dùng template có sẵn",
    desc: "Được định hình nhận diện thương hiệu độc quyền từ đầu.",
  },
  {
    number: "24/7",
    label: "Hỗ trợ kỹ thuật và đồng hành trực tiếp",
    desc: "Đội ngũ chuyên trách sẵn sàng phản hồi và hỗ trợ vận hành.",
  },
];

const solutions = [
  {
    id: "essential",
    name: "BAKIO Essential",
    subtitle: "Tiêu chuẩn",
    slogan: "Đơn giản. Tinh tế. Đúng chuẩn.",
    benefits: [
      "Thiết kế tối giản, tinh gọn từng đường nét",
      "Chuẩn hóa bộ nhận diện thương hiệu nhất quán",
      "Tối ưu toàn diện trên thiết bị di động (Mobile-First)",
      "Bàn giao nhanh chóng, chuẩn chỉ trong 3-5 ngày",
    ],
    highlight: "Khởi động nhanh",
  },
  {
    id: "business",
    name: "BAKIO Business",
    subtitle: "Doanh nghiệp",
    slogan: "Tối ưu hóa từng lượt chuyển đổi.",
    benefits: [
      "Cấu trúc trải nghiệm người dùng (UX) bài bản",
      "Tích hợp luồng thu thập khách hàng tiềm năng tự động",
      "Chuẩn hóa kỹ thuật cho các chiến dịch quảng cáo đa kênh",
      "Tối ưu SEO On-Page và cấu trúc dữ liệu theo chuẩn Google",
    ],
    highlight: "Tăng trưởng doanh thu",
  },
  {
    id: "ultra",
    name: "BAKIO Ultra",
    subtitle: "Kỹ thuật cao",
    slogan: "Thách thức mọi giới hạn kỹ thuật.",
    benefits: [
      "Xử lý các hiệu ứng cuộn và chuyển động phức tạp ở tốc độ 60fps",
      "Tối ưu hiệu năng trang web luôn dưới 0.8 giây",
      "Vận hành mượt mà, ổn định tuyệt đối không độ trễ",
      "Hiệu ứng thị giác viền ánh sáng và kính mờ Frosted Glass",
    ],
    highlight: "Trải nghiệm đỉnh cao",
  },
  {
    id: "bespoke",
    name: "BAKIO Bespoke",
    subtitle: "Đặt theo yêu cầu",
    slogan: "Hiện thực hóa mọi ý tưởng độc bản.",
    benefits: [
      "Lập trình may đo 100% từ đầu theo bài toán riêng",
      "Tư vấn kiến trúc hệ thống 1:1 cùng chuyên gia",
      "Bảo mật cấp cao và hạ tầng Cloud Server độc lập",
      "Khả năng mở rộng tính năng và tích hợp hệ thống không giới hạn",
    ],
    highlight: "Độc quyền tuyệt đối",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState(solutions[0].name);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSelectSolution = (solutionName: string) => {
    setSelectedSolution(solutionName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setContactName("");
      setContactPhone("");
      setContactMessage("");
    }, 4500);
  };

  const currentSolution = solutions[activeTab];

  return (
    <div className="site-wrapper">
      <nav className="header-nav">
        <div className="nav-inner">
          <a href="#hero" className="brand-logo">
            BAKIO
          </a>

          <div className="nav-menu">
            <a href="#hero" className="nav-item">
              Khám phá
            </a>
            <a href="#about" className="nav-item">
              Về chúng tôi
            </a>
            <a href="#solutions" className="nav-item">
              Giải pháp
            </a>
            <a href="#contact" className="nav-item">
              Liên hệ
            </a>
          </div>

          <div className="nav-right">
            <a href="#contact" className="nav-cta">
              Liên hệ
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="hero-block">
          <div className="giant-backdrop" aria-hidden="true">
            <span className="giant-text">BAKIO</span>
          </div>

          <div className="hero-foreground">
            <div className="studio-pill hero-fade-up-1">
              <span className="pill-dot"></span>
              <h2 className="studio-title">BAKIO Studio</h2>
            </div>

            <h1 className="hero-main-slogan hero-fade-up-2">
              Định hình chuẩn mực số.
            </h1>

            <p className="hero-lead hero-fade-up-3">
              Thiết kế và lập trình website tối giản, tốc độ vượt bậc và tôn vinh
              bản sắc thương hiệu cao cấp.
            </p>

            <div className="hero-action-cluster hero-fade-up-4">
              <a href="#solutions" className="action-btn primary-btn">
                Khám phá dịch vụ
              </a>
              <a href="#contact" className="action-btn secondary-btn">
                Nhận tư vấn
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about-block">
          <div className="about-inner">
            <div className="section-head-light">
              <span className="head-label-light">Về Chúng Tôi</span>
              <h2 className="head-title-light">Sự tinh gọn tạo nên khác biệt.</h2>
              <p className="about-statement">
                BAKIO Studio tập trung vào việc tạo ra những website tinh gọn, tốc độ
                cao, kết hợp giữa tư duy thẩm mỹ cao cấp và nền tảng kỹ thuật vững chắc
                nhằm mang lại giá trị chuyển đổi thực sự cho đối tác.
              </p>
            </div>

            <div className="stats-row">
              {stats.map((item, idx) => (
                <div key={idx} className="stat-box">
                  <div className="stat-metric">{item.number}</div>
                  <h3 className="stat-heading">{item.label}</h3>
                  <p className="stat-sub">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="solutions-block">
          <div className="solutions-inner">
            <div className="section-head-light">
              <span className="head-label-light">Giải Pháp & Sản Phẩm</span>
              <h2 className="head-title-light">Chọn quy chuẩn phù hợp cho bạn.</h2>
              <p className="head-desc-light">
                Mỗi gói giải pháp được thiết kế tối ưu, minh bạch và đáp ứng chính xác
                mục tiêu tăng trưởng của từng giai đoạn doanh nghiệp.
              </p>
            </div>

            <div className="tab-control-container">
              <div className="tab-pills-bar">
                {solutions.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`tab-pill-btn ${activeTab === idx ? "active" : ""}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <span className="tab-pill-name">{item.name}</span>
                    <span className="tab-pill-sub">{item.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            <div key={currentSolution.id} className="solution-detail-card tab-content-anim">
              <div className="detail-card-header">
                <div>
                  <span className="detail-tag">{currentSolution.highlight}</span>
                  <h3 className="detail-name">{currentSolution.name}</h3>
                </div>
                <div className="detail-subtitle-badge">
                  {currentSolution.subtitle}
                </div>
              </div>

              <div className="detail-slogan-box">
                <p className="detail-slogan">"{currentSolution.slogan}"</p>
              </div>

              <div className="detail-benefits-wrap">
                <h4 className="benefits-title">Lợi ích mang lại:</h4>
                <div className="benefits-grid">
                  {currentSolution.benefits.map((benefit, i) => (
                    <div key={i} className="benefit-item">
                      <div className="benefit-check-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-action-footer">
                <button
                  type="button"
                  className="choose-solution-btn"
                  onClick={() => handleSelectSolution(currentSolution.name)}
                >
                  Chọn giải pháp này
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-footer-block">
          <div className="contact-footer-inner">
            <div className="contact-card-box">
              <div className="contact-meta">
                <span className="contact-tag">Liên Hệ</span>
                <h2 className="contact-heading">Bắt đầu dự án cùng BAKIO.</h2>
                <p className="contact-caption">
                  Chia sẻ ý tưởng của bạn để nhận lộ trình triển khai chi tiết cùng báo
                  giá tối ưu nhất.
                </p>

                <div className="contact-direct-list">
                  <a
                    href="https://zalo.me/0762271672"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-channel-link"
                  >
                    <span className="channel-indicator" />
                    <span>Zalo hỗ trợ: <strong>0762271672</strong></span>
                  </a>
                  <a
                    href="mailto:trannamkm123456788@gmail.com"
                    className="direct-channel-link"
                  >
                    <span className="channel-indicator" />
                    <span>Email: <strong>trannamkm123456788@gmail.com</strong></span>
                  </a>
                </div>
              </div>

              <form className="contact-form-dark" onSubmit={handleFormSubmit}>
                <div className="input-row">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Họ và tên của bạn *"
                    className="custom-field"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>

                <div className="input-row">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="Số điện thoại hoặc Zalo *"
                    className="custom-field"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                  />
                </div>

                <div className="input-row">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder={`Gói đang quan tâm: ${selectedSolution}. Ghi chú thêm mong muốn của bạn...`}
                    className="custom-field textarea-field"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="submit-btn-dark">
                  {sentSuccess ? "✓ Đã gửi yêu cầu thành công" : "Gửi yêu cầu hợp tác"}
                </button>
              </form>
            </div>

            <footer className="final-footer">
              <div className="footer-left-content">
                <span className="footer-brand">BAKIO</span>
                <span className="footer-copy">
                  Bản quyền thuộc về BAKIO Studio © 2026.
                </span>
              </div>
              <div className="footer-right-content">
                <span>Thiết kế & Xây dựng giao diện Apple Minimalist</span>
                <span>Hotline: 0762271672</span>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
