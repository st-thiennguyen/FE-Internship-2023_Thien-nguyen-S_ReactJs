import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import '../stylesheet/scss/style.scss';
import Cart from './pages/cart';
import Home from './pages/home';
import { Footer, Header } from './shared/layout';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [
    { path: '/', element: <Home /> },
    {
      path: '/cart',
      element: <Cart />,
    },
  ];

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
