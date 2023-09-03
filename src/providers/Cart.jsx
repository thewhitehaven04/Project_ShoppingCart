import cartReducer from '@reducers/cartReducer';
import { createContext, useContext, useMemo, useReducer } from 'react';

/** @type React.Context<function(import('../reducers/cartReducer').CartAction): void> */
export const ShoppingCartDispatchContext = createContext(null);
/** @type React.Context<import('../reducers/cartReducer').CartContextItem[]> */
export const ShoppingCartContext = createContext([]);

/**
 * @param {?any} param0
 * @returns
 */
export default function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const itemsMemo = useMemo(() => items, [items]);

  return (
    <ShoppingCartContext.Provider value={itemsMemo}>
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
