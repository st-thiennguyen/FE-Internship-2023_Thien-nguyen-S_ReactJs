import logo from '../../../assets/icons/ic-logo.svg';
import icSearch from '../../../assets/icons/icon-search.svg';
import icCart from '../../../assets/icons/icon-cart.svg';
import icUser from '../../../assets/icons/icon-user.svg';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface HeaderProps {
  cartCount: number;
}

export const Header = (props: HeaderProps) => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(location.pathname !== '/' ? true : false);

  const handleScroll = () => {
    if (window.scrollY > 0 || location.pathname !== '/') {
      setScrolling(true);
    } else if (location.pathname === '/') {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <header id='header' className={`header ${scrolling ? 'header-change' : ''}`}>
        <div className='container'>
          <div className='header-desktop d-flex justify-between'>
            <div className='header-logo'>
              <h1 className='logo-heading'>
                <Link to={'/'} className='header-logo-link'>
                  <img src={logo} alt='Logo E shop' className='logo-img' />
                </Link>
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
                  <Link className='icon-link' to={'/cart'}>
                    <img src={icCart} alt='Icon of cart' />
                    <span id='cart-count' className='cart-count d-flex justify-center item-center'>
                      {props.cartCount}
                    </span>
                  </Link>
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
