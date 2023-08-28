import cartReducer, { cartActionTypes } from '../cartReducer';
import { expect, it, describe } from 'vitest';

describe('Cart reducer', () => {
  const singleItem = {
    name: 'test',
    id: '120390',
    price: 521.1,
    quantity: 1,
    itemPicture: 'lol',
  };

  const multipleItems = {
    name: 'other test item',
    id: '20139029',
    price: 521.1,
    quantity: 4,
    itemPicture: 'lol',
  };

  it('Add a single item to the cart', () => {
    /** @type import('../cartReducer').CartContextItem */
    expect(
      cartReducer([], { type: cartActionTypes.addToCart, data: singleItem }),
    ).toContainEqual(singleItem);
  });

  it('Add multiple different items', () => {
    const firstState = cartReducer([], {
      type: cartActionTypes.addToCart,
      data: singleItem,
    });
    const secondState = cartReducer(firstState, {
      type: cartActionTypes.addToCart,
      data: multipleItems,
    });

    expect(secondState).toHaveLength(2);
    expect(secondState).toContainEqual(singleItem);
    expect(secondState).toContainEqual(multipleItems);
  });

  it('Remove the only remaining item with quantity of 1', () => {
    expect(
      cartReducer([singleItem], {
        type: cartActionTypes.removeFromCart,
        data: { id: singleItem.id, quantity: 1 },
      }),
    ).toHaveLength(0);
  });

  it('Change the quantity of the only remaining item in the cart', () => {
    const state = cartReducer([multipleItems], {
      type: cartActionTypes.addToCart,
      data: { id: multipleItems.id, quantity: 1 },
    });
    expect(state).toHaveLength(1);
    expect(state[0]).toHaveProperty('quantity', 1);
  });
});
