import { act, render, screen } from '@testing-library/react';
import StoreItem from '..';
import React from 'react';
import img from './../../../resources/images/test_img.png';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from 'context/cartContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, commodi, tempora corrupti harum cum dolore magnam quae, repudiandae deserunt voluptas exercitationem praesentium adipisci ex! Esse voluptatibus perferendis accusantium unde eligendi!';
const item = {
  id: '302139021',
  name: 'Dummy',
  description: lorem,
  itemPicture: img,
  price: 9500.12,
};

describe('Static store item fields', () => {
  const dispatchMock = jest.fn(() => console.log());
  const RouterMock = ({ children }) => (
    <MemoryRouter initialEntries={['/store']}>
      <Routes>
        <Route path="/" element={<span>Hello</span>} />
        <Route path="/store" element={children[0]} />
        <Route path="/cart" element={<span>cart placeholder</span>} />
      </Routes>
    </MemoryRouter>
  );
  test("Item's name, description and price are displayed", () => {
    render(
      <RouterMock>
        <ShoppingCartDispatchContext.Provider value={dispatchMock}>
          <ShoppingCartContext.Provider value={[]}>
            <StoreItem {...item} />
          </ShoppingCartContext.Provider>
        </ShoppingCartDispatchContext.Provider>
      </RouterMock>,
    );

    expect(screen.findByText(item.name)).toBeTruthy();
    expect(screen.findByText(item.price)).toBeTruthy();
    expect(screen.findByText(item.description)).toBeTruthy();
  });

  test('Click on purchase redirects to cart', async () => {
    render(
      <RouterMock>
        <ShoppingCartDispatchContext.Provider value={dispatchMock}>
          <ShoppingCartContext.Provider value={[]}>
            <StoreItem {...item} />
          </ShoppingCartContext.Provider>
        </ShoppingCartDispatchContext.Provider>
      </RouterMock>,
    );

    act(() => {
      const user = userEvent.setup();
      user.click(screen.findByRole('link', { textContent: 'Purchase' }));
    });

    expect(await screen.findByText('cart placeholder')).toBeTruthy();
  });

  test("Click on 'add to new cart' changes the button to 'remove from cart'", async () => {
    render(
      <RouterMock>
        <ShoppingCartDispatchContext.Provider value={dispatchMock}>
          <ShoppingCartContext.Provider value={[]}>
            <StoreItem {...item} />
          </ShoppingCartContext.Provider>
        </ShoppingCartDispatchContext.Provider>
      </RouterMock>,
    );

    const user = userEvent.setup();
    await user.click(
      screen.queryByRole('button', { textContent: 'Add to cart' }),
    );
    expect(
      screen.queryAllByRole('button', { textContent: 'Remove from cart' }),
    ).toBeTruthy();

    await user.click(
      screen.queryByRole('button', { textContent: 'Remove from cart' }),
    );
    expect(
      screen.queryAllByRole('button', { textContent: 'Add to cart' }),
    ).toBeTruthy();
  });
});
