/**
 * @readonly
 * @enum {String}
 */
export const cartActionTypes = {
  addToCart: 'add',
  removeFromCart: 'remove',
};

/**
 * @typedef CartItem
 * @property {String} name
 * @property {String} [description]
 * @property {Number} [price]
 * @property {String} [itemPicture]
 */

/**
 * @typedef {CartItem[]} CartState
 */

/**
 * @typedef {Object} CartAction
 * @property {String} type
 * @property {CartItem} data
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
      return state.filter((cartItem) => cartItem.name !== action.data.name);
    default:
      return state;
  }
}