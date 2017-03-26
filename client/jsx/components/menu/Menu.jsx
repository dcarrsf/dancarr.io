import React from 'react';
import MenuItem from './MenuItem';
import Logo from '../logo/Logo';

class Menu extends React.Component {
  // Lifecycle methods...
  render() {
    // Calculations...
    const items = this.props.items;
    const len = items.length;
    let menuItems = [];
    for (let i = 1; i < len; i++) {
      const isSelected = this.props.selectedIndex === i;
      const uniqueKey = `item-${i}`;
      menuItems.push(
        <MenuItem key={uniqueKey} label={items[i].label}
                  route={items[i].route} selected={isSelected}/>
      );
    }
    return (
      <nav>
        <Logo label={items[0].label} route={items[0].route} 
              selected={this.props.selectedIndex === 0} />
        <ul role="nav" className="menu">
          {menuItems}
        </ul>
      </nav>
    );
  }
}

// Validate props

Menu.propTypes = {
  items: React.PropTypes.array,
  selectedIndex: React.PropTypes.number,
};

export default Menu;