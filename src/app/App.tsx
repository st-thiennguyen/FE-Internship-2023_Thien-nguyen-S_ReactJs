import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

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

  const dispatch = useDispatch();

  const useInfo = useSelector((state: RootState) => state.auth.user);

  const isLogin = Object.entries(useInfo).length > 0;

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
  };

  const routes = [
    { path: '/', element: <Home /> },
    {
      path: '/cart',
      element: isLogin ? <Cart /> : <Navigate to="/" />,
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
        <Login />
      </Modal>
      <Footer />
    </>
  );
}

export default App;
