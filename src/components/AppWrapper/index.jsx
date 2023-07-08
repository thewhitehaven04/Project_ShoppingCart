import React from 'react';
import style from './../../styles/header.css';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function AppWrapper() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  );
}
