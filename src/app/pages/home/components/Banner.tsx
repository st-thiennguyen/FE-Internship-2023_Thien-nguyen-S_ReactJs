import React from 'react';

import icArrowRight from '../../../../assets/icons/icon-arrow-right.png';

const Banner = () => {
  return (
    <>
      <section className="section section-banner">
        <div className="container">
          <div className="banner">
            <div className="banner-content">
              <h2 className="banner-title">
                Sale of the
                <span className="text-primary">summer</span> collection
              </h2>
              <a href="/#" className="banner-action d-flex item-center">
                <img src={icArrowRight} alt="Arrow right button of shop now" />
                <span className="banner-action-txt">Shop now</span>
              </a>
            </div>
            <div className="banner-statitics">
              <ul className="statistic-list d-flex">
                <li className="statistic-item">
                  <div className="statistic d-flex">
                    <i className="statistic-icon icon icon-truck-yellow"></i>
                    <div className="statistic-content">
                      <h4 className="statistic-title">Free Shipping</h4>
                      <p className="statistic-description">
                        On purchases over $199
                      </p>
                    </div>
                  </div>
                </li>

                <li className="statistic-item">
                  <div className="statistic d-flex">
                    <i className="statistic-icon icon icon-dollar-yellow"></i>
                    <div className="statistic-content">
                      <h4 className="statistic-title">
                        99% Satisfied Customers
                      </h4>
                      <p className="statistic-description">
                        Our clients' opinions speak for themselves
                      </p>
                    </div>
                  </div>
                </li>

                <li className="statistic-item">
                  <div className="statistic d-flex">
                    <i className="statistic-icon icon icon-smile-yellow"></i>
                    <div className="statistic-content">
                      <h4 className="statistic-title">
                        Originality Guaranteed
                      </h4>
                      <p className="statistic-description">
                        30 days warranty for each product from our store
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
