import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Main from '../../components/Main';
import Store from '../../components/Store';

export default function StorePage() {
  const data = useLoaderData();

  return (
    <Main>
      <Store items={data} />
    </Main>
  );
}
