import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import '../stylesheet/scss/style.scss';
import Cart from './pages/cart';
import Home from './pages/home';
import { logout, modalLoginToggle } from './redux/action';
import { RootState } from './redux/store';
import Login from './shared/components/Login';
import Modal from './shared/components/Modal';
import { StorageKey } from './shared/constants';
import { Footer, Header } from './shared/layout';
import { saveDataToStorage } from './shared/utils';

function App() {
  const { pathname } = useLocation();

  const [previousPath, setPreviousPath] = useState('/');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const useInfo = useSelector((state: RootState) => state.auth.user);

  const isLogin = Object.entries(useInfo).length > 0;

  useEffect(() => {
    if (pathname) {
      setPreviousPath(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    saveDataToStorage(StorageKey.USER, useInfo);
  }, [useInfo]);

  const isOpenModalLogin = useSelector(
    (state: RootState) => state.userInterface.isOpenModalLogin,
  );

  const handleLogout = () => {
    dispatch(logout() as any);
  };

  const closeLoginModal = () => {
    dispatch(modalLoginToggle());
    if (pathname !== '/') {
      navigate('/');
    }
  };

  const routes = [
    { path: '/', element: <Home isLogin={isLogin} path={previousPath} /> },
    {
      path: '/cart',
      element: isLogin ? (
        <Cart />
      ) : (
        <Home isLogin={isLogin} path={previousPath} />
      ),
    },
  ];
  return (
    <>
      <Header
        isLogin={isLogin}
        closeLoginModal={closeLoginModal}
        userInfo={useInfo}
        handleLogout={handleLogout}
      />
      <Routes>
        {routes.length > 0 &&
          routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            );
          })}
      </Routes>
      <Modal isOpen={isOpenModalLogin} onClose={closeLoginModal}>
        <Login previousPath={previousPath} />
      </Modal>
      <Footer />
    </>
  );
}

export default App;
