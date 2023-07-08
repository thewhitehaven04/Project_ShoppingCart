import React from 'react';
import { render, screen } from '@testing-library/react';
import xsx from './../../../resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';
import ps5 from './../../../resources/images/sony-playstation-ps5-konzola-2.png';
import Store from '..';
import { __esModule } from '@testing-library/jest-dom/dist/matchers';

jest.mock('./../../../components/StoreItem/index.jsx', () =>
  // eslint-disable-next-line react/display-name
  ({ name, description, itemPicture, price }) => (
    <div>
      <span>{name}</span>
      <span>{description}</span>
      <span>{itemPicture}</span>
      <span>{price}</span>
    </div>
  ),
);

describe('Displaying item list in store', () => {
  test('Zero items displayed', () => {
    const { container } = render(<Store items={[]} />);
    expect(container.childNodes[0].hasChildNodes()).toBeFalsy();
  });

  test('1 item displayed', () => {
    /**
     * @type import('components/StoreItem').StoreItemProps
     */
    const item = {
      id: '123',
      name: 'test',
      description: 'description',
      itemPicture: 'hm',
      price: 225.16,
    };
    render(<Store items={[item]} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  test('Multiple items displayed', () => {
    const items = [
      {
        id: '123',
        name: 'test',
        description: 'description',
        itemPicture: 'hm',
        price: 225.16,
      },
      {
        id: '234',
        name: 'test2',
        description: 'description2',
        itemPicture: 'hm2',
        price: 225.18,
      },
    ];

    render(<Store items={items} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});