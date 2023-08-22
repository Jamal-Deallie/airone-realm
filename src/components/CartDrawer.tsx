import cn from 'classnames';
import styles from '@/styles/components/CartDrawer.module.scss';

type CartProps = {
  close: () => void;
  state: boolean;
};

export default function CartDrawer({ close, state }: CartProps) {
  return (
    <>
      <div
        onClick={close}
        className={cn(
          styles['cart-bg'],
          'full-h',
          state ? styles['open-bg'] : null
        )}
      />
      <div
        className={cn(
          styles['drawer'],
          'tertiary-bg',
          state ? styles['open-drawer'] : null
        )}>
        <header>
          <span>Cart</span>{' '}
          <button onClick={close} aria-labelledby='cart-button-open'>
            close
          </button>
        </header>
        <div className={styles['inner']}>
          <span>Inner</span>
        </div>
        <div className={styles['footer']}>
          <span>footer</span>
        </div>
      </div>
    </>
  );
}
