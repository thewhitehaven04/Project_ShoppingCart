import AppHeader from 'components/Header';
import StoreItemExpanded from 'components/StoreItemExpanded';
import CartPage from 'pages/CartPage';
import StorePage from 'pages/Store';
import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import localStorageWrapper from 'service/localStorage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppHeader />} handle={{ crumb: () => 'Home' }}>
      <Route path="store" handle={{ crumb: () => 'Store' }}>
        <Route index element={<StorePage />} />
        <Route
          path=":id"
          element={<StoreItemExpanded />}
          handle={{ crumb: (data) => data.name }}
          loader={({ params }) => localStorageWrapper('items').get(params.id)}
        />
      </Route>
      <Route
        path="cart"
        element={<CartPage />}
        handle={{ crumb: () => 'Shopping Cart' }}
      />
      <Route index element={<div>Home placeholder</div>} />
    </Route>,
  ),
);

export default router;