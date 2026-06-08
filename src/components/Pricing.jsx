import { pricingPlans } from "../data/siteData.js";

const Pricing = () => (
  <section className="mh-pricing" id="pricing">
    <div>
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 section-title">
            <h3>Pricing</h3>
          </div>
          {pricingPlans.map((plan, index) => (
            <div key={plan.title} className="col-sm-12 col-md-4">
              <div
                className="mh-pricing dark-bg shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay={`${0.3 + index * 0.2}s`}
              >
                <i className={`fa ${plan.icon}`} />
                <h4>{plan.title}</h4>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#E91E63" }}>
                  {plan.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
