import Cart from '@/svgs/Cart';
import styles from '@/styles/components/CartButton.module.scss';

export default function CartButton() {
  return (
    <button className={styles['cart-btn']} aria-labelledby='cart-button'>
      <span id='cart-button' hidden>
        Cart
      </span>
      <Cart />
    </button>
  );
}
