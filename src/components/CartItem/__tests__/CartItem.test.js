import { ShoppingCartDispatchContext } from 'providers/Cart';
import CartItem from '..';
import ip14 from './../../../resources/images/iphone14pro.png';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { cartActionTypes } from 'reducers/cartReducer';
import {
  MemoryRouter,
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { formatPrice } from 'utils/formatPrice';

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

  expect(screen.getByText(dummyItem.name)).toBeInTheDocument();
  expect(screen.getByText(formatPrice(dummyItem.price))).toBeInTheDocument();
  expect(screen.getByRole('spinbutton', { value: '2' })).toBeInTheDocument();
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
      screen.getByRole('button', { name: 'Remove item from cart' }),
    );
  });

  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenCalledWith({
    type: cartActionTypes.removeFromCart,
    data: { id: dummyItem.id },
  });
});

test('Cart image redirect', async () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <>
        <Route path="/store/:id" element={dummyItem.id} />
        <Route path="/cart" element={<CartItem {...dummyItem} />} />
      </>,
    ),
    { initialEntries: ['/cart'], initialIndex: 1 },
  );

  render(
    <ShoppingCartDispatchContext.Provider value={dispatchMock}>
      <RouterProvider router={router} />
    </ShoppingCartDispatchContext.Provider>,
  );

  await act(async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('img'));
  });

  expect(screen.getByRole('generic')).toHaveTextContent(dummyItem.id);
});
