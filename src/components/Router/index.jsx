import { routeToCrumbMap } from 'components/Breadcrumbs/routeToCrumbMap';
import AppHeader from 'components/Header';
import StoreItemExpanded from 'components/StoreItemExpanded';
import CartPage from 'pages/Cart';
import HomePage from 'pages/Home';
import ItemPage from 'pages/Item';
import StorePage from 'pages/Store';
import UnderConstruction from 'pages/UnderConstruction';
import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import localStorageWrapper from 'service/localStorage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppHeader />}
      handle={{ crumb: () => routeToCrumbMap.get('/home') }}
    >
      <Route
        path="store"
        handle={{ crumb: () => routeToCrumbMap.get('/store') }}
      >
        <Route
          index
          element={<StorePage />}
          loader={() => localStorageWrapper('items').getAll()}
        />
        <Route
          path=":id"
          element={<ItemPage />}
          handle={{ crumb: (data) => <span>{data.name}</span> }}
          loader={({ params }) => localStorageWrapper('items').get(params.id)}
        />
      </Route>
      <Route
        path="cart"
        element={<CartPage />}
        handle={{ crumb: () => routeToCrumbMap.get('/cart') }}
      />
      <Route
        index
        element={<HomePage />}
        loader={() => localStorageWrapper('featuredItems').getAll()}
      />
      <Route
        path="checkout"
        element={<UnderConstruction />}
        handle={{ crumb: () => routeToCrumbMap.get('/checkout') }}
      />
    </Route>,
  ),
);

export default router;
