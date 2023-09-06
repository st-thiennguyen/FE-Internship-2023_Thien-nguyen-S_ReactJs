import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import '../stylesheet/scss/style.scss';
import Cart from './pages/cart';
import Home from './pages/home';
import { modalLoginToggle } from './redux/actions';
import { RootState } from './redux/store';
import Login from './shared/components/Login';
import Modal from './shared/components/Modal';
import { Footer, Header } from './shared/layout';

function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const isLogin = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isOpenModalLogin = useSelector(
    (state: RootState) => state.userInterface.isOpenModalLogin,
  );

  const closeLoginModal = () => {
    dispatch(modalLoginToggle());
  };

  const routes = [
    { path: '/', element: <Home /> },
    {
      auth: isLogin,
      path: '/cart',
      element: <Cart isLogin={isLogin} closeLoginModal={closeLoginModal} />,
    },
  ];
  return (
    <>
      <Header isLogin={isLogin} closeLoginModal={closeLoginModal} />
      <Routes>
        {routes.length > 0 &&
          routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.auth ? route.element : <Navigate to="/" />}
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
