import { render, screen } from '@testing-library/react';
import StoreItem from '..';
import React from 'react';
import img from './../../../resources/images/test_img.png';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from 'context/cartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, commodi, tempora corrupti harum cum dolore magnam quae, repudiandae deserunt voluptas exercitationem praesentium adipisci ex! Esse voluptatibus perferendis accusantium unde eligendi!';
const item = {
  name: 'Dummy',
  description: lorem,
  itemPicture: img,
  price: 9500.12,
};

describe('Static store item fields', () => {
  const dispatchMock = jest.fn(() => console.log());
  const RouterMock = ({ children }) => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<span>Hello</span>} />
        <Route path="/cart" element={children[0]} />
      </Routes>
    </BrowserRouter>
  );
  test("Item's name, description and price are displayed", () => {
    render(
      <ShoppingCartDispatchContext.Provider value={dispatchMock}>
        <ShoppingCartContext.Provider value={[]}>
          <RouterMock>
            <StoreItem {...item} />
          </RouterMock>
        </ShoppingCartContext.Provider>
      </ShoppingCartDispatchContext.Provider>,
    );

    expect(screen.queryByText(item.name)).toBeTruthy();
    expect(screen.queryByText(item.price)).toBeTruthy();
    expect(screen.queryByText(item.description)).toBeTruthy();
  });
});
