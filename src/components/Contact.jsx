import { contactMethods } from "../data/siteData.js";

const Contact = () => (
  <footer className="mh-footer" id="contact">
    <div className="image-bg">
      <div className="container">
        <div className="row section-separator">
          <div
            className="col-sm-12 section-title wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <h3>Contact</h3>
          </div>
          <div className="col-sm-12 mh-footer-address">
            <div className="row">
              {contactMethods.map((method, index) => (
                <div key={method.title} className="col-sm-12 col-md-4">
                  <div
                    className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay={`${0.3 + index * 0.2}s`}
                  >
                    <div className="each-icon">
                      <i
                        className={`fa ${method.icon}`}
                        style={method.iconStyle}
                      />
                    </div>
                    <div className="each-info">
                      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {method.title}
                      </p>
                      {method.detail}
                    </div>
                    <br />
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="btn btn-fill"
                    >
                      {method.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-sm-12 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.5s"
          >
            <div className="mh-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380052.046638386!2d-87.8576976!3d41.8333829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0b4c3ed%3A0x3e9d37e21ee0ee05!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1749020996008!5m2!1sen!2sus"
                style={{
                  border: 0,
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chicago, IL map"
              />
            </div>
          </div>
          <div
            className="col-sm-12 mh-copyright wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <div style={{ textAlign: "center" }}>
              <p>&copy; 2026 John Shelley</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Contact;
