import React from 'react';
import Store from '..';
import { render, screen } from '@testing-library/react';
import xsx from './../../../resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';
import ps5 from './../../../resources/images/sony-playstation-ps5-konzola-2.png';
import { ShoppingCartDispatchContext } from '../../../context/cartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const items = [
  {
    name: 'Xbox Series X',
    description: 'kek',
    itemPicture: xsx,
    price: 500,
    isAddedToCart: false,
  },
  {
    name: 'PlayStation 5',
    description: 'ps5',
    itemPicture: ps5,
    price: 500,
    isAddedToCart: false,
  },
];

const dispatchMock = jest.fn(() => console.log());
const RouterMock = jest.fn(({ children }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/cart" element={children[0]}></Route>
    </Routes>
  </BrowserRouter>
));

describe('Displaying item list in store', () => {
  test('Zero items displayed', () => {
    const { container } = render(<Store items={[]}></Store>);
    expect(container.childNodes[0].hasChildNodes()).toBeFalsy();
  });

  test('1 item displayed', () => {
    render(
      <ShoppingCartDispatchContext.Provider value={dispatchMock}>
        <RouterMock>
          <Store items={[items[1]]} />
        </RouterMock>
      </ShoppingCartDispatchContext.Provider>,
    );
    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
  });

  test('Multiple items displayed', () => {
    render(
      <ShoppingCartDispatchContext.Provider value={dispatchMock}>
        <RouterMock>
          <Store items={items} />
        </RouterMock>
      </ShoppingCartDispatchContext.Provider>,
    );
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
  });
});
