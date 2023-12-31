import { act, render, screen } from '@testing-library/react';
import { useReducer } from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ps5 from '@images/ps5.png';
import xsx from '@images/xsx.png';
import cartReducer from '@reducers/cartReducer';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from '@providers/Cart';
import Cart from '@pages/Cart';

const items = [
  {
    name: 'test1',
    id: '111',
    price: 125,
    quantity: 3,
    itemPicture: ps5,
  },
  {
    name: 'test2',
    id: '222',
    price: 150,
    quantity: 2,
    itemPicture: xsx,
  },
];
const CartContextWrapper = ({ items }) => {
  const [testItems, dispatch] = useReducer(cartReducer, items);

  return (
    <MemoryRouter>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        <ShoppingCartContext.Provider value={testItems}>
          <Cart />
        </ShoppingCartContext.Provider>
      </ShoppingCartDispatchContext.Provider>
    </MemoryRouter>
  );
};

test('Correct item quantity is displayed ', () => {
  /** @type import('@components/CartItem').CartItemProps[] */
  render(
    <MemoryRouter>
      <ShoppingCartContext.Provider value={items}>
        <Cart />
      </ShoppingCartContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.getByTestId('quantity')).toHaveTextContent('Item quantity: 5');
});

test('Correct total price is displayed', () => {
  /** @type import('@components/CartItem').CartItemProps[] */
  render(
    <MemoryRouter>
      <ShoppingCartContext.Provider value={items}>
        <Cart />
      </ShoppingCartContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.getByTestId('total')).toHaveTextContent('675');
});

test('Total quantity is updated after removing an item', async () => {
  render(<CartContextWrapper items={items} />);

  await act(async () => {
    const user = userEvent.setup();
    await user.click(
      screen.queryAllByRole('button', { name: 'Remove item from cart' })[0],
    );
  });
  expect(screen.getByTestId('quantity')).toHaveTextContent('Item quantity: 2');
});

test('Total quantity is updated after changes to counters', async () => {
  render(<CartContextWrapper items={items} />);
  const element = screen.queryAllByLabelText('Quantity:')[0];

  await act(async () => {
    const user = userEvent.setup();
    await user.clear(element);
    await user.type(element, '10');
  });

  expect(screen.getByTestId('quantity')).toHaveTextContent('Item quantity: 12');
});

test('Total price is updated after changes to counters', async () => {
  render(<CartContextWrapper items={items} />);

  await act(async () => {
    const user = userEvent.setup();
    const element = screen.queryAllByLabelText('Quantity:')[0];
    await user.clear(element);
    await user.type(element, '10');
  });

  expect(screen.getByTestId('total')).toHaveTextContent(
    `Total: $${125 * 10 + 150 * 2}.00`,
  );
});

test('Total price is updated after removing an item', async () => {
  render(<CartContextWrapper items={items} />);
  await act(async () => {
    const user = userEvent.setup();
    await user.click(
      screen.queryAllByRole('button', { name: 'Remove item from cart' })[0],
    );
  });

  expect(await screen.findByTestId('total')).toHaveTextContent(
    `Total: $${150 * 2}.00`,
  );
});
