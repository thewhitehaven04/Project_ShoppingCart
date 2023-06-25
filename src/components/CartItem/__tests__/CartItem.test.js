import { ShoppingCartDispatchContext } from 'providers/Cart';
import CartItem from '..';
import ip14 from './../../../resources/images/iphone14pro.png';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const dispatchMock = jest.fn(() => {
  console.log('lol');
});

const dummyItem = {
  id: '2913912',
  name: 'iPhone 14 Pro',
  price: 652.25,
  itemPicture: ip14,
};

test('Cart item attributes are displayed', () => {
  render(
    <ShoppingCartDispatchContext.Provider value={dispatchMock}>
      <CartItem {...dummyItem}></CartItem>
    </ShoppingCartDispatchContext.Provider>,
  );

  expect(screen.findAllByText(dummyItem.name)).toBeTruthy();
  expect(screen.findAllByText(dummyItem.price)).toBeTruthy();
});

test('Cart item remove button hides the component', async () => {
  render(
    <div className="container">
      <CartItem {...dummyItem}></CartItem>
    </div>,
  );

  act(() => {
    const user = userEvent.setup();
    user.click(screen.findByRole('button', { textContent: 'Remove' }));
  });

  expect(screen.queryAllByAltText('listitem')).toHaveLength(0);
});
