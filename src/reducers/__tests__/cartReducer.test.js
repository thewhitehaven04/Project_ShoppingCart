import cartReducer, { cartActionTypes } from '../cartReducer';

describe('Cart reducer', () => {
  const item = {
    name: 'Lol',
    description: 'Kek',
    price: 9500,
    itemPicture: 'hm',
  };

  it('Add an item to the state', () => {
    expect(
      cartReducer([], { type: cartActionTypes.addToCart, data: item }),
    ).toContainEqual(item);
  });

  it('Remove an item from the state', () => {
    expect(
      cartReducer([item], {
        type: cartActionTypes.removeFromCart,
        data: { name: 'Lol' },
      }),
    ).toHaveLength(0);
  });
});
