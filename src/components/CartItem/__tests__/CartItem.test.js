import {
  ShoppingCartDispatchContext,
} from 'providers/Cart';
import CartItem from '..';
import ip14 from './../../../resources/images/iphone14pro.png';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { cartActionTypes } from 'reducers/cartReducer';
import { MemoryRouter } from 'react-router-dom';

const dispatchMock = jest.fn(() => {
  console.log('lol');
});

const dummyItem = {
  id: '2913912',
  name: 'iPhone 14 Pro',
  price: 652.25,
  itemPicture: ip14,
  quantity: 2,
};

test('Cart item attributes are displayed', () => {
  render(
    <MemoryRouter>
      <ShoppingCartDispatchContext.Provider value={dispatchMock}>
        <CartItem {...dummyItem} />
      </ShoppingCartDispatchContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.findAllByText(dummyItem.name)).toBeTruthy();
  expect(screen.findAllByText(dummyItem.price)).toBeTruthy();
  expect(screen.findAllByRole('textbox', { value: 2 }));
});

test('Cart item remove calls the reducer dispatch function', async () => {
  const dispatchMock = jest.fn(() => []);

  render(
    <MemoryRouter>
      <ShoppingCartDispatchContext.Provider value={dispatchMock}>
        <CartItem {...dummyItem} />
      </ShoppingCartDispatchContext.Provider>
    </MemoryRouter>,
  );

  await act(async () => {
    const user = userEvent.setup();
    await user.click(
      await screen.findByRole('button', { name: 'Remove item from cart' }),
    );
  });

  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenCalledWith({
    type: cartActionTypes.removeFromCart,
    data: { id: dummyItem.id },
  });
});
