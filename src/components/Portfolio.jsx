import { useMemo, useState } from "react";
import { portfolioFilters, portfolioItems } from "../data/siteData.js";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredItems = useMemo(() => {
    if (activeFilter === "*") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="mh-portfolio" id="portfolio">
      <div className="container">
        <div className="row section-separator">
          <div
            className="section-title col-sm-12 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.1s"
          >
            <h3>Portfolio</h3>
          </div>
          <div className="part col-sm-12">
            <div className="portfolio-nav col-sm-12" id="filter-button">
              <ul>
                {portfolioFilters.map((filter, index) => (
                  <li
                    key={filter.id}
                    className={`wow fadeInUp${
                      activeFilter === filter.id ? " current" : ""
                    }`}
                    data-wow-duration="0.8s"
                    data-wow-delay={`${0.1 + index * 0.1}s`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <span>{filter.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="mh-project-gallery col-sm-12 wow fadeInUp"
              id="project-gallery"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <div className="portfolioContainer row">
                {filteredItems.map((item) => (
                  <div
                    key={item.url}
                    className={`grid-item col-md-4 col-sm-6 col-xs-12 ${item.category}`}
                  >
                    <figure>
                      <img src={item.image} alt={item.alt} />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search" />
                        <span className="title">{item.title}</span>
                        <span className="sub-title">{item.subtitle}</span>
                        <a
                          href={item.url}
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                        />
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
