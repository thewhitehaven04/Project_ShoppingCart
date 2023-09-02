import { TextButton } from '@components/TextButton';
import { useShoppingCart } from '@providers/Cart';
import { Link } from 'react-router-dom';

export default function HeaderCartStatus() {
  const cartItems = useShoppingCart();

  const totalCount = cartItems.reduce((currentCount, cartItem) => {
    currentCount += cartItem.quantity;
    return currentCount;
  }, 0);

  return (
    <Link to="/cart">
      <TextButton type="button">{totalCount} items</TextButton>
    </Link>
  );
}
