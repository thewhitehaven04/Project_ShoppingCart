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
 * @property {Number} price
 * @property {Number} quantity
 */

/**
 * @typedef {CartContextItem[]} CartState
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
  const { id } = action.data;

  if (action.type === cartActionTypes.removeFromCart) return [...state.filter((item) => item.id !== id)];
  
  if (action.type === cartActionTypes.addToCart) {
    if (state.find((item) => item.id === id)) {
      const oldIndex = state.findIndex((item) => item.id === id);
      state[oldIndex] = action.data;
      return [...state];
    }

    return [...state, action.data];
  }
}

/**
 * @module
 * @exports CartState
 * @exports CartAction
 * @exports CartContextItem
 */
