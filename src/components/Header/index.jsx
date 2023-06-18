import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/header.css';
import { Outlet } from 'react-router-dom';
import HeaderCartStatus from 'components/HeaderCartStatus';

export default function AppHeader() {
  return (
    <>
      <header className="header__flex">
        <span>Shopping Cart</span>
        <HeaderCartStatus/>
      </header>
      <Outlet />
    </>
  );
}
