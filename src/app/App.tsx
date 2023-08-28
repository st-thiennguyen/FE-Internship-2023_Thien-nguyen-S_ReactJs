import React from 'react';
import Home from './pages/home/Home';
import '../stylesheet/scss/style.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './pages/cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
