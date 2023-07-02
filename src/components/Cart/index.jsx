import CartItem from 'components/CartItem';
import { useShoppingCart } from 'providers/Cart';
import React, { useEffect } from 'react';
import style from './../../styles/cart.css';
import { formatPrice } from 'utils/formatPrice';
import EmptyCartMessage from 'components/EmptyCartMessage';

export default function Cart() {
  const cartItems = useShoppingCart();

  const totalSum = cartItems.reduce((sum, item) => {
    sum += item.price;
    return sum;
  }, 0);
  const totalQuantity = cartItems.reduce((quantity, item) => {
    quantity += item.quantity;
    return quantity;
  }, 0);

  return cartItems.length === 0 ? (
    <EmptyCartMessage />
  ) : (
    <>
      <ul className="cart-items__collection">
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <CartItem {...cartItem} />
          </li>
        ))}
      </ul>
      <div className="cart-items__total">
        <span>Item quantity: {totalQuantity}</span>
        <span>Total: {formatPrice(totalSum)}</span>
      </div>
    </>
  );
}
