import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';

const Header = ({logo, menu, width, scrollOffset, selectedIndex}) => {
  const css = {};
  if (scrollOffset > 0) {
    css.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0.4)';
  } else {
    css.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0)';
  }
  return (
    <header className="header" style={css}>
      <nav>
        <i className="fa fa-navicon navicon" aria-hidden="true"></i>
        <Logo label={logo.label} route={logo.route} 
              selected={selectedIndex === -1} />
        <Menu items={menu} width={width} selectedIndex={selectedIndex}/>
      </nav>
    </header>
  );
}

// Validate props

Header.propTypes = {
  logo: React.PropTypes.object,
  menu: React.PropTypes.array,
  scrollOfset: React.PropTypes.number,
  selectedIndex: React.PropTypes.number,
  width: React.PropTypes.number,
};

export default Header;