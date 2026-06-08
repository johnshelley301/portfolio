import { services } from "../data/siteData.js";
import { scrollToSection } from "../hooks/useScrollSpy.js";

const Services = () => (
  <section className="mh-blog" id="services">
    <div className="container">
      <div className="row section-separator">
        <div
          className="col-sm-12 section-title wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >
          <h3>Services</h3>
        </div>
        {services.map((service, index) => (
          <div key={service.title} className="col-sm-12 col-md-4">
            <div
              className="mh-blog-item dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <img src={service.image} alt={service.alt} className="img-fluid" />
              <div className="blog-inner">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a
                  href="#contact"
                  className="btn btn-fill"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection("#contact");
                  }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
