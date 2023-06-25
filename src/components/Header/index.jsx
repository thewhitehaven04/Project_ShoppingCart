import React from 'react';
import style from './../../styles/header.css';
import { Outlet } from 'react-router-dom';
import HeaderCartStatus from 'components/HeaderCartStatus';
import { Link } from 'react-router-dom';
import Breadcrumbs from 'components/Breadcrumbs';

export default function AppHeader() {
  return (
    <>
      <header className="header__flex">
        <nav className="header_navigation">
          <button type="button">
            <Link to="/">Home</Link>
          </button>
          <button type="button">
            <Link to="/store">Back to store</Link>
          </button>
        </nav>
        <HeaderCartStatus />
      </header>
      <Breadcrumbs />
      <Outlet />
    </>
  );
}
