import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({items, width, selectedIndex}) => {
  const len = items.length;
  let menuItems = [];
  items.forEach((item, i) => {
    const isSelected = selectedIndex === i;
    const uniqueKey = `item-${i}`;
    menuItems.push(
      <MenuItem key={uniqueKey} label={item.label} labelShort={item.labelShort}
                icon={item.icon} width={width} route={item.route} selected={isSelected}/>
    );
  });
  return (
    <ul role="nav" className="menu">
      {menuItems}
    </ul>
  );
}

// Validate props

Menu.propTypes = {
  items: React.PropTypes.array,
  selectedIndex: React.PropTypes.number,
};

export default Menu;