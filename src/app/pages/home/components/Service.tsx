import React from 'react';

const Service = () => {
  return (
    <>
      <section className="section section-services">
        <div className="container">
          <div className="services-header">
            <h3 className="section-title text-center">
              Why should you choose us?
            </h3>
          </div>

          <ul className="services-list row justify-between">
            <li className="service-item col col-3 col-sm-12">
              <div className="service">
                <a href="/#" className="service-action">
                  <div className="service-image d-flex justify-center item-center">
                    <i className="icon icon-truck-service"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Free Shipping</h4>
                    <p className="service-subtitle">
                      All purchases over $199 are eligible forfree shipping via
                      USPS First className Mail.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="service-item col col-3 col-sm-12">
              <div className="service">
                <a href="/#" className="service-action">
                  <div className="service-image d-flex justify-center item-center">
                    <i className="icon icon-payment-service"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Easy Payments</h4>
                    <p className="service-subtitle">
                      All payments are processed instantlyover a secure payment
                      protocol.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="service-item col col-3 col-sm-12">
              <div className="service">
                <a href="/#" className="service-action">
                  <div className="service-image d-flex justify-center item-center">
                    <i className="icon icon-guarantee-service"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Money-Back Guarantee</h4>
                    <p className="service-subtitle">
                      If an item arrived damaged or you'vechanged your mind, you
                      can send itback for a full refund.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="service-item col col-3 col-sm-12">
              <div className="service">
                <a href="/#" className="service-action">
                  <div className="service-image d-flex justify-center item-center">
                    <i className="icon icon-quality-service"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Finest Quality</h4>
                    <p className="service-subtitle">
                      Designed to last, each of our products hasbeen crafted
                      with the finest materials.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Service;
