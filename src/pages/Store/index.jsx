import Main from '@components/Main';
import Store from '@components/Store';
import { useLoaderData } from 'react-router-dom';

export default function StorePage() {
  const data = useLoaderData();

  return (
    <Main>
      <Store items={data} />
    </Main>
  );
}
