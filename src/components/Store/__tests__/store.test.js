import React from 'react';
import { render, screen } from '@testing-library/react';
import xsx from './../../../resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';
import ps5 from './../../../resources/images/sony-playstation-ps5-konzola-2.png';
import Store from '..';

jest.mock(
  './../../../components/StoreItem/index.jsx',
  () =>
    ({ name, description, itemPicture, price }) => {
      <div>
        <span>{name}</span>
        <span>{description}</span>
        <span>{itemPicture}</span>
        <span>{price}</span>
      </div>;
    },
);

describe('Displaying item list in store', () => {
  const items = [
    {
      name: 'Xbox Series X',
      description: 'kek',
      itemPicture: xsx,
      price: 500,
    },
    {
      name: 'PlayStation 5',
      description: 'ps5',
      itemPicture: ps5,
      price: 500,
    },
  ];

  test('Zero items displayed', () => {
    const { container } = render(<Store items={[]} />);
    expect(container.childNodes[0].hasChildNodes()).toBeFalsy();
  });

  test('1 item displayed', () => {
    render(<Store items={[items[0]]} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  test('Multiple items displayed', () => {
    render(<Store items={items} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
