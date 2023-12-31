import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { useShoppingCart } from '../../providers/Cart';
import style from './../../styles/cart.css';
import EmptyCartMessage from '@components/EmptyCartMessage';
import CartItem from '@components/CartItem';

export default function Cart() {
  const cartItems = useShoppingCart();

  const totalSum = cartItems.reduce((sum, item) => {
    sum += item.price * item.quantity;
    return sum;
  }, 0);
  const totalQuantity = cartItems.reduce((quantity, item) => {
    quantity += item.quantity;
    return quantity;
  }, 0);

  return cartItems.length === 0 ? (
    <EmptyCartMessage />
  ) : (
    <div className="cart-align-end">
      <ul className="cart-items__collection">
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <CartItem {...cartItem} />
          </li>
        ))}
      </ul>
      <div className="cart-items_footer">
        <div data-testid="quantity">Item quantity: {totalQuantity}</div>
        <div data-testid="total">Total: {formatPrice(totalSum)}</div>
        <Link to="/checkout">
          <button className="controls-button" type="button">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
