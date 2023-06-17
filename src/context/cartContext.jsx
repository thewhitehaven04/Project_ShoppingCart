import { createContext, useReducer } from 'react';
import React from 'react';
import cartReducer from '../reducers/cartReducer';
import xsx from './../resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';

export const ShoppingCartDispatchContext = createContext(null);
export const ShoppingCartContext = createContext(null);

export default function CartContext({ children }) {
  const cartItems = [
    {
      name: 'Xbox Series X',
      description: 'kek',
      itemPicture: xsx,
      price: 500,
      isAddedToCart: false,
    },
  ];

  const [items, dispatch] = useReducer(cartReducer, cartItems);

  return (
    <ShoppingCartContext.Provider value={items}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
