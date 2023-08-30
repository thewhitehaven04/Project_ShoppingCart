import style from '@styles/header.css';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Breadcrumbs from '@components/Breadcrumbs';
import Footer from '@components/Footer';

export default function AppWrapper() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer/>
    </>
  );
}
