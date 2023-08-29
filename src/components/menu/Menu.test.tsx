import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'; // Using MemoryRouter to test components that use React Router
import Menu from './Menu';
import { menu } from "../../data";

describe('Menu Component', () => {
  it('renders menu items', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

    // Check if the correct number of menu items are rendered
    expect(wrapper.find('.item')).toHaveLength(menu.length);

    // check if the title of a menu item is rendered correctly
    const firstMenuItem = wrapper.find('.item').at(0);
    expect(firstMenuItem.find('.title').text()).toBe(menu[0].title);
  });

});

