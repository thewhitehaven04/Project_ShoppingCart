import { render, screen } from '@testing-library/react';
import StoreItem from '..';
import React from 'react';
import img from './../../../resources/images/test_img.png';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, commodi, tempora corrupti harum cum dolore magnam quae, repudiandae deserunt voluptas exercitationem praesentium adipisci ex! Esse voluptatibus perferendis accusantium unde eligendi!';
const item = {
  name: 'Dummy',
  description: lorem,
  itemPicture: img,
  isAddedToCart: false,
  price: 9500.12,
};

describe('Static store item fields', () => {
  test("Item's name, description and price are displayed", () => {
    render(<StoreItem {...item} />);
    expect(screen.queryByText(item.name)).toBeTruthy();
    expect(screen.queryByText(item.price)).toBeTruthy();
    expect(screen.queryByText(item.description)).toBeTruthy();
  });
});
