import React from 'react';
import Menu from '../menu/Menu';

const Header = ({items, scrollOffset, width, selectedIndex}) => {
  const item = items[selectedIndex];
  const css = {};
  if (scrollOffset > 0) {
    css.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0.4)';
  } else {
    css.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0)';
  }
  return (
    <header className='header' style={css}>
      <Menu items={items} width={width} selectedIndex={selectedIndex}/>
    </header>
  );
}

// Validate props

Header.propTypes = {
  items: React.PropTypes.array,
  scrollOfset: React.PropTypes.number,
  selectedIndex: React.PropTypes.number,
  width: React.PropTypes.number,
};

export default Header;