import { createContext, useContext, useReducer } from 'react';
import React from 'react';
import cartReducer from '../reducers/cartReducer';

export const ShoppingCartDispatchContext = createContext(null);
export const ShoppingCartContext = createContext([]);

export default function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  return (
    <ShoppingCartContext.Provider value={items}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch() {
  return useContext(ShoppingCartDispatchContext);
}