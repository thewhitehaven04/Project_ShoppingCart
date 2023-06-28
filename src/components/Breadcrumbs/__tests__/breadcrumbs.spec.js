import { render, screen } from '@testing-library/react';
import { default as React } from 'react';
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Breadcrumbs from '..';

it('One-level deep breadcrumbs', () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<Breadcrumbs />}>
        <Route
          path="/home"
          handle={{
            crumb: () => 'Home',
          }}
          element={<div>home</div>}
        />
      </Route>,
    ),
    { initialEntries: ['/home'], initialIndex: 1 },
  );

  render(<RouterProvider router={router} />);

  expect(screen.getByRole('link').textContent).toEqual('Home');
});

it('Multi-level deep breadcrumbs', () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<Breadcrumbs />}>
        <Route
          path="/home"
          handle={{
            crumb: () => 'Home',
          }}
          element={<div>Lmao</div>}
        >
          <Route path="store" handle={{ crumb: () => 'Store' }} />
        </Route>
      </Route>,
    ),
    { initialEntries: ['/home/store'], initialIndex: 1 },
  );

  render(<RouterProvider router={router} />);

  const elements = screen
    .getAllByRole('link')
    .map((element) => element.textContent);
  expect(elements).toContainEqual('Home');
  expect(elements).toContainEqual('Store');
  expect(elements).toHaveLength(2);
});

it('No breadcrumbs', () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<Breadcrumbs />}>
        <Route
          path="/home"
          handle={{
            crumb: () => 'Home',
          }}
          element={<div>Home</div>}
        />
      </Route>,
    ),
    { initialEntries: ['/'], initialIndex: 1 },
  );

  render(<RouterProvider router={router} />);

  const elements = screen.queryAllByRole('link');
  expect(elements).toHaveLength(0);

  expect(location.pathname).toEqual('/');
});
