import { act, render, screen } from '@testing-library/react';
import { default as React } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '..';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from 'providers/Cart';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { cartActionTypes } from 'reducers/cartReducer';

const items = [
  {
    name: 'test1',
    id: '111',
    price: 125,
    itemPicture: 'test',
    quantity: 3,
  },
  {
    name: 'test2',
    id: '222',
    price: 150,
    itemPicture: 'lol',
    quantity: 2,
  },
];

it('Correct item quantity is displayed ', () => {
  /** @type import('components/CartItem').CartItemProps[] */
  render(
    <MemoryRouter>
      <ShoppingCartContext.Provider value={items}>
        <Cart />
      </ShoppingCartContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.getByTestId('quantity').textContent).toEqual(
    'Item quantity: 5',
  );
});

it('Correct total price is displayed', () => {
  /** @type import('components/CartItem').CartItemProps[] */
  render(
    <MemoryRouter>
      <ShoppingCartContext.Provider value={items}>
        <Cart />
      </ShoppingCartContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.getByTestId('total')).toHaveTextContent('675');
});

it('Total quantity is updated after deletion of an item', async () => {
  let testItems = Array.from(items);
  const deleteItem = jest.fn().mockImplementation(() => {
    testItems = [testItems[1]]
  });

  render(
    <MemoryRouter>
      <ShoppingCartContext.Provider value={testItems}>
        <ShoppingCartDispatchContext.Provider value={deleteItem}>
          <Cart />
        </ShoppingCartDispatchContext.Provider>
      </ShoppingCartContext.Provider>
    </MemoryRouter>,
  );
  await act(async () => {
    const user = userEvent.setup();
    await user.click(screen.queryAllByRole('button', { name: 'Remove item from cart' })[0]);
  });
  expect(screen.getByTestId('quantity')).toHaveTextContent('Item quantity: 2');
});
