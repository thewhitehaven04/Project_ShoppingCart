/**
 * @readonly
 * @enum {String}
 */
export const cartActionTypes = {
  addToCart: 'add',
  removeFromCart: 'remove',
};
/**
 * @typedef CartContextItem
 * @property {String} id 
 * @property {String} name 
 * @property {String} itemPicture 
 * @property {String} price 
 */

/**
 * @typedef {CartItem[]} CartState
 */

/**
 * @typedef {Object} CartAction
 * @property {String} type
 * @property {CartContextItem} data
 */

/**
 * @param {CartState} state
 * @param {CartAction} action
 */
export default function cartReducer(state, action) {
  switch (action.type) {
    case cartActionTypes.addToCart:
      return [...state, action.data];
    case cartActionTypes.removeFromCart:
      return state.filter((cartItem) => cartItem.id !== action.data.id);
    default:
      return state;
  }
}

/**
 * @module
 * @exports CartState
 * @exports CartAction 
 * @exports CartContextItem 
 */