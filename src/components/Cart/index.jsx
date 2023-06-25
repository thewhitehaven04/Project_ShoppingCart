import CartItem from 'components/CartItem';
import { useShoppingCart } from 'providers/Cart';
import React from 'react';
import style from './../../styles/cart.css';
import { formatPrice } from 'utils/formatPrice';

export default function Cart() {
  const cartItems = useShoppingCart();

  const totalSum = () =>
    cartItems.reduce((sum, item) => {
      sum += item.price;
      return sum;
    }, 0);

  return cartItems.length === 0 ? (
    <span>There are no items in your cart</span>
  ) : (
    <>
      <ul className="cart-items__collection">
        {cartItems.map((cartItem) => (
          <li key={cartItem.prop}>
            <CartItem {...cartItem} />
          </li>
        ))}
      </ul>
      <div className="cart-items__total">
        <span>{cartItems.length} items in cart</span>
        <span>Total: {formatPrice(totalSum())}</span>
      </div>
    </>
  );
}
