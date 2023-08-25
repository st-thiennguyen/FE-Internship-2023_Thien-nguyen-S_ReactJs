import React from 'react';
import logo from '../../../assets/images/ic-logo.svg';
import icSearch from '../../../assets/images/icon-search.svg';
import icCart from '../../../assets/images/icon-cart.svg';
import icUser from '../../../assets/images/icon-user.svg';

const Header = ()  => {
  return (
    <>
      <header id='header' className='header'>
        <div className='container'>
          <div className='header-desktop d-flex justify-between'>
            <div className='header-logo'>
              <h1 className='logo-heading'>
                <a href='/#' className='header-logo-link'>
                  <img src={logo} alt='Logo E shop' className='logo-img' />
                </a>
              </h1>
            </div>
            <nav className='header-navbar'>
              <ul className='navbar-list d-flex'>
                <li className='navbar-item'>
                  <a className='navbar-link' href='/#'>
                    Men
                  </a>
                </li>
                <li className='navbar-item'>
                  <a className='navbar-link' href='/#'>
                    Women
                  </a>
                </li>
                <li className='navbar-item'>
                  <a className='navbar-link' href='/#'>
                    Kids
                  </a>
                </li>
              </ul>
            </nav>
            <div className='header-icon'>
              <ul className='icon-list d-flex'>
                <li className='icon-item'>
                  <a className='icon-link' href='/#'>
                    <img src={icSearch} alt='Icon of search' />
                  </a>
                </li>
                <li className='header-cart icon-item'>
                  <a className='icon-link' href='cart.html'>
                    <img src={icCart} alt='Icon of cart' />
                    <span id='cart-count' className='cart-count d-flex justify-center item-center'>
                      0
                    </span>
                  </a>
                </li>
                <li className='icon-item'>
                  <a className='icon-link' href='/#'>
                    <img src={icUser} alt='Icon of user account' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='header-mobile d-hidden justify-between item-center'>
            <div className='header-mobile-logo'>
              <a href='/#' className='d-flex item-center'>
                <img src='./' aria-hidden alt='Image of logo Eshop' />
              </a>
            </div>
            <nav className='navbar-mobile'>
              <ul className='navbar-mobile-list d-flex'>
                <li className='navbar-mobile-item'>
                  <a href='/#' className='navbar-mobile-link d-flex item-center'>
                    <i className='icon icon-search'></i>
                  </a>
                </li>
                <li className='navbar-mobile-item'>
                  <a href='/#' className='navbar-mobile-link d-flex item-center'>
                    <i className='icon icon-cart-mb'></i>
                  </a>
                </li>
                <li className='navbar-mobile-item'>
                  <a href='/#' className='navbar-mobile-link d-flex item-center'>
                    <i className='icon icon-user-mb'></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
