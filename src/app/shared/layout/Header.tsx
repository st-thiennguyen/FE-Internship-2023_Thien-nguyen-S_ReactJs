import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../../assets/icons/ic-logo.svg';
import icCart from '../../../assets/icons/icon-cart.svg';
import icSearch from '../../../assets/icons/icon-search.svg';
import icUser from '../../../assets/icons/icon-user.svg';
import { CartItemModel } from '../../models';
import { RootState } from '../../redux/store';
import { StorageKey } from '../constants';
import { saveDataToStorage } from '../utils';

type HeaderComponentProps = {
  isLogin: boolean;
  closeLoginModal: () => void;
  userInfo: any;
  handleLogout: () => void;
};

export const Header = ({
  isLogin,
  closeLoginModal,
  userInfo,
  handleLogout,
}: HeaderComponentProps) => {
  const location = useLocation();

  const navigate = useNavigate();

  const cartList = useSelector((state: any) => state.cart.items);

  const isAuthLoading = useSelector((state: RootState) => state.auth.isLoading);

  const cartCount = cartList.reduce(
    (total: number, item: CartItemModel) => (total += item.quantity),
    0,
  );

  const [scrolling, setScrolling] = useState(location.pathname !== '/');

  useEffect(() => {
    saveDataToStorage(StorageKey.CART, cartList);
  }, [cartList]);

  const handleScroll = () => {
    if (window.scrollY > 0 || location.pathname !== '/') {
      setScrolling(true);
    } else if (location.pathname === '/') {
      setScrolling(false);
    }
  };

  const handlePreLoadPage = () => {
    if (!isLogin) {
      closeLoginModal();
    } else {
      navigate('/cart');
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
      <header
        id="header"
        className={`header ${scrolling ? 'header-change' : ''}`}
      >
        <div className="container">
          <div className="header-desktop d-flex justify-between">
            <div className="header-logo">
              <h1 className="logo-heading">
                <Link to={'/'} className="header-logo-link">
                  <img src={logo} alt="Logo E shop" className="logo-img" />
                </Link>
              </h1>
            </div>
            <nav className="header-navbar">
              <ul className="navbar-list d-flex">
                <li className="navbar-item">
                  <a className="navbar-link" href="/#">
                    Men
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="/#">
                    Women
                  </a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link" href="/#">
                    Kids
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-icon">
              <ul className="icon-list d-flex">
                <li className="icon-item">
                  <a className="icon-link" href="/#">
                    <img src={icSearch} alt="Icon of search" />
                  </a>
                </li>
                <li className="header-cart icon-item">
                  <Link
                    to={isLogin ? '/cart' : ''}
                    onClick={handlePreLoadPage}
                    className="icon-link"
                  >
                    <img src={icCart} alt="Icon of cart" />
                    <span className="cart-count d-flex justify-center item-center">
                      {cartCount}
                    </span>
                  </Link>
                </li>
                <li className="icon-item">
                  <a className="header-account icon-link" href="/#">
                    <img src={icUser} alt="Icon of user account" />
                    <ul className="header-account-list">
                      {isLogin ? (
                        <>
                          <li className="header-account-item">
                            Welcome {userInfo?.fullName}
                          </li>
                          <li className="header-account-item">
                            <Link
                              to={''}
                              onClick={handleLogout}
                              className="account-link"
                            >
                              {isAuthLoading ? 'Handling' : 'Logout'}
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li className="header-account-item">
                          <Link
                            to={''}
                            onClick={closeLoginModal}
                            className="account-link"
                          >
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-mobile d-hidden justify-between item-center">
            <div className="header-mobile-logo">
              <a href="/#" className="d-flex item-center">
                <img src={logo} aria-hidden alt="Image of logo Eshop" />
              </a>
            </div>
            <nav className="navbar-mobile">
              <ul className="navbar-mobile-list d-flex">
                <li className="navbar-mobile-item">
                  {isLogin ? (
                    <Link
                      to={''}
                      onClick={handleLogout}
                      className="account-link navbar-mobile-link d-flex item-center"
                    >
                      <i className="icon icon-logout-mb"></i>
                    </Link>
                  ) : (
                    <Link
                      to={''}
                      onClick={closeLoginModal}
                      className="account-link navbar-mobile-link d-flex item-center"
                    >
                      <i className="icon icon-user-mb"></i>
                    </Link>
                  )}
                </li>
                <li className="navbar-mobile-item">
                  <a
                    href="/#"
                    className="navbar-mobile-link d-flex item-center"
                  >
                    <i className="icon icon-cart-mb"></i>
                  </a>
                </li>
                <li className="navbar-mobile-item">
                  <a
                    href="/#"
                    className="navbar-mobile-link d-flex item-center"
                  >
                    <i className="icon icon-search"></i>
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
