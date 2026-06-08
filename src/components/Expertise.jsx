import { expertiseItems } from "../data/siteData.js";

const Expertise = () => (
  <section className="mh-service">
    <div className="container">
      <div className="row section-separator">
        <div
          className="col-sm-12 text-center section-title wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >
          <h3>Expertise</h3>
        </div>
        {expertiseItems.map((item, index) => (
          <div key={item.title} className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <i className={`fa ${item.icon} iron-color`} />
              <h4 className="title">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
