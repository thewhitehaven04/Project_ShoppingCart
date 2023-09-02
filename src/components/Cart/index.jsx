import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { useShoppingCart } from '../../providers/Cart';
import style from './../../styles/cart.css';
import EmptyCartMessage from '@components/EmptyCartMessage';
import CartItem from '@components/CartItem';
import { TextButton } from '@components/TextButton';
import { CardWrapper } from '@components/CardWrapper';
import FlexWrapper from '@components/FlexWrapper';

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
    <FlexWrapper $direction="column" $align="end">
      <ul className="cart-items__collection">
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <CardWrapper>
              <CartItem {...cartItem} />
            </CardWrapper>
          </li>
        ))}
      </ul>
      <FlexWrapper $direction="column" $align="flex-end">
        <div data-testid="quantity">Item quantity: {totalQuantity}</div>
        <div data-testid="total">Total: {formatPrice(totalSum)}</div>
        <Link to="/checkout">
          <TextButton type="button">Checkout</TextButton>
        </Link>
      </FlexWrapper>
    </FlexWrapper>
  );
}
