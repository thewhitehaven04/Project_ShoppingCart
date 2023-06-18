import { createContext, useReducer } from 'react';
import React from 'react';
import cartReducer from '../reducers/cartReducer';

export const ShoppingCartDispatchContext = createContext(null);
export const ShoppingCartContext = createContext([]);

export default function CartContext({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  return (
    <ShoppingCartContext.Provider value={items}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
