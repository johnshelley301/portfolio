const About = () => (
  <section className="mh-about" id="about">
    <div className="container">
      <div className="row section-separator">
        <div className="col-sm-12 col-md-6">
          <div
            className="mh-about-img shadow-2 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.4s"
          >
            <img
              src="/content/ab-img.png"
              alt="Web Developer"
              title="Web Developer"
              className="img-fluid about"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="mh-about-inner">
            <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
              About
            </h3>
            <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              I&apos;m a full-stack web developer for hire, based in Chicago, USA
              and available for remote work with clients worldwide. I work with individuals,
              businesses, and startups to design and develop fast, secure, and modern websites
              and web applications that are reliable, scalable, and built for long-term success.
            </p>
            <div
              className="mh-about-tag wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <ul>
                <li>
                  <span>Front-End: HTML, CSS, JavaScript, Vue.js</span>
                </li>
                <li>
                  <span>Back-End: PHP, MySQL</span>
                </li>
                <li>
                  <span>CMS &amp; E-commerce Platforms: WordPress, OpenCart</span>
                </li>
              </ul>
            </div>
            <a
              href="/content/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              Download CV <i className="fa fa-download" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
