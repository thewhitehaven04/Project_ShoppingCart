import React from 'react';
import HeaderCartStatus from '../HeaderCartStatus';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/header.css';

export default function AppHeader() {
  return (
    <header className='header__flex'>
      <HeaderCartStatus />
    </header>
  );
}
