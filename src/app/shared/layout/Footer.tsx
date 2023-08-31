import React from 'react';
import logo from '../../../assets/icons/ic-logo.svg';

export const Footer = () => {
  return (
    <>
      <footer id='footer' className='footer'>
        <div className='container'>
          <div className='footer-wrapper row'>
            <div className='footer-top col col-6 col-sm-12'>
              <div className='footer-top-logo'>
                <h2 className='footer-top-heading'>
                  <a href='./' className='footer-logo-link'>
                    <img src={logo} alt='Footer logo' />
                  </a>
                </h2>
              </div>
              <p className='footer-top-txt'>
                House My Brand designs clothing for the young, the old &everyone in between – but
                most importantly, for the fashionable
              </p>
              <ul className='social-list d-flex'>
                <li className='social-item'>
                  <a href='/#' className='social-action'>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a href='/#' className='social-action'>
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a href='./' className='social-action'>
                    <i className='fa-brands fa-linkedin'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a href='/#' className='social-action'>
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a href='/#' className='social-action'>
                    <i className='fa-brands fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer-infor col col-6 col-sm-12'>
              <ul className='infor-shop-list row'>
                <li className='infor-shop-item col col-4 col-sm-12'>
                  <div className='infor-item-wrapper'>
                    <p className='infor-item-title'>Shopping online</p>
                    <ul className='infor-subitem-list'>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Order Status
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Shopping and Delivery
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Returns
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Payment options
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='infor-shop-item col col-4 col-sm-12'>
                  <div className='infor-item-wrapper'>
                    <p className='infor-item-title'>Information</p>
                    <ul className='infor-subitem-list'>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Gift Cards
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Find a store
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Newsletter
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Bacome a member
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Site feedback
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='infor-shop-item col col-4 col-sm-12'>
                  <div className='infor-item-wrapper'>
                    <p className='infor-item-title'>Contact</p>
                    <ul className='infor-subitem-list'>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          store@uikit.com
                        </a>
                      </li>
                      <li className='subitem-item'>
                        <a href='./' className='subitem-item-link'>
                          Hotline: +1 131 138 138
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright d-flex item-center'>
          <p className='copyright-txt'>
            DESIGN BY{' '}
            <a href='/#' className='org-link'>
              ICEO.CO
            </a>{' '}
            - © 2019. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
};
