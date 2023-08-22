import { useState } from 'react';
import Cart from '@/svgs/Cart';
import styles from '@/styles/components/CartButton.module.scss';
import CartDrawer from '@/components/CartDrawer';

export default function CartButton() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const close = () => {
    setCartOpen(false);
  };

  const open = () => {
    setCartOpen(true);
  };

  const toggle = () => {
    setCartOpen(cartOpen => !cartOpen);
  };
  return (
    <>
      <button
        className={styles['cart-btn']}
        aria-labelledby='cart-button-open'
        onClick={open}>
        <span id='cart-button' hidden>
          Cart
        </span>
        <Cart />
      </button>
      <CartDrawer close={close} state={cartOpen} />
    </>
  );
}
