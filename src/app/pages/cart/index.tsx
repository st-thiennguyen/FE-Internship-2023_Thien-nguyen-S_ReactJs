import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CartHeader from './components/CartHeader';
import CartList from './components/CartList';

type CartComponentProps = {
  isLogin: boolean;
  closeLoginModal: Function;
};

const Cart = ({ isLogin, closeLoginModal }: CartComponentProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
      closeLoginModal();
    }
  }, []);

  return (
    <>
      <CartHeader />
      <CartList />
    </>
  );
};

export default Cart;
