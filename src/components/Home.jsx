import { socialLinks } from "../data/siteData.js";

const Home = () => (
  <section className="mh-home" id="home">
    <div className="home-ovimg">
      <div className="container">
        <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
          <div className="col-sm-6">
            <div className="mh-header-info">
              <div
                className="mh-promo wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                <span>Hello I&apos;m</span>
              </div>
              <span
                className="mh-name wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                John Shelley
              </span>
              <h1
                className="mh-title wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                Full-Stack Web Developer
              </h1>
              <ul>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <i className="fa fa-phone" />
                  <a href="tel:+13125550147">+1 (518) 247-56707</a>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <i className="fa fa-envelope" />
                  <a href="mailto:johnshelley26@gmail.com">johnshelley26@gmail.com</a>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                >
                  <i className="fa fa-map-marker" style={{ margin: "0 18px 0 1px" }} />
                  <address>
                    <a
                      href="https://maps.app.goo.gl/Chicago"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chicago, IL, USA
                    </a>
                  </address>
                </li>
              </ul>
              <ul
                className="social-icon wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              >
                {socialLinks.map(({ href, icon }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <i className={`fa ${icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="hero-img wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.6s"
            >
              <div className="img-border">
                <img
                  src="/content/omaralkhatib.jpg"
                  alt="Full-Stack Web Developer | John Shelley"
                  title="Full-Stack Web Developer | John Shelley"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
