import { act, render, screen } from '@testing-library/react';
import StoreItem from '..';
import React  from 'react';
import img from './../../../resources/images/test_img.png';
import CartProvider from 'providers/Cart';
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { formatPrice } from 'utils/formatPrice';
import '@testing-library/jest-dom';


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
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/store" element={<StoreItem {...item} />} />,
    ),
    { initialEntries: ['/store'], initialIndex: 1 },
  );

  test("Item's name, description and price are displayed", () => {
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    expect(screen.findByText(item.name)).toBeTruthy();
    expect(screen.findByText(formatPrice(item.price))).toBeTruthy();
    expect(screen.findByText(item.description)).toBeTruthy();
  });

  test('Click on purchase redirects to cart', async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <>
          <Route path="/store" element={<StoreItem {...item} />} />,
          <Route path="/cart" element={<div>cart</div>} />,
        </>,
      ),
      { initialEntries: ['/store'], initialIndex: 1 },
    );
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    const user = userEvent.setup();
    await user.click(screen.queryByRole('button', { name: 'Purchase' }));

    expect(await screen.findByText('cart')).toBeTruthy();
  });

  test("Click on 'add to new cart' changes the button to 'remove from cart'", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <>
          <Route path="/store" element={<StoreItem {...item} />} />,
          <Route path="/cart" element={<div>cart</div>} />,
        </>,
      ),
      { initialEntries: ['/store'], initialIndex: 1 },
    );

    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Add to cart' }));
    });
    expect(await screen.findByText('Remove from cart')).toBeInTheDocument();

    await act(async () => {
      await user.click(
        screen.getByRole('button', { name: 'Remove from cart' }),
      );
    });
    expect(await screen.findByText('Add to cart')).toBeInTheDocument();
  });
});
