import { Link } from 'react-router-dom';
import { cartActionTypes } from '@reducers/cartReducer';
import { useShoppingCartDispatch, useShoppingCart } from '@providers/Cart';
import { TextButton } from '@components/TextButton';
import FlexWrapper from '@components/FlexWrapper';

/**
 * @param {import('@components/StoreItem').StoreItemProps} props
 */
export default function ItemControls(props) {
  const dispatch = useShoppingCartDispatch();
  const cartItems = useShoppingCart();

  const isItemInCart = cartItems.find((cartItem) => cartItem.id === props.id);

  const handlePurchase = () => {
    if (!isItemInCart) {
      dispatch({
        type: cartActionTypes.addToCart,
        data: { ...props, quantity: 1 },
      });
    }
  };

  const handleAddToCart = () =>
    dispatch({
      type: cartActionTypes.addToCart,
      data: { ...props, quantity: 1 },
    });

  const handleRemoveFromCart = () =>
    dispatch({
      type: cartActionTypes.removeFromCart,
      data: { ...props, quantity: 1 },
    });

  return (
    <FlexWrapper $direction="column">
      {isItemInCart ? (
        <TextButton type="button" onClick={handleRemoveFromCart}>
          Remove from cart
        </TextButton>
      ) : (
        <TextButton type="button" onClick={handleAddToCart}>
          Add to cart
        </TextButton>
      )}
      <Link onClick={handlePurchase} to="/cart">
        <TextButton type="button">Purchase</TextButton>
      </Link>
    </FlexWrapper>
  );
}
