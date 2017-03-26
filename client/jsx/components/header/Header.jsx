import React from 'react';
import Menu from '../menu/Menu.jsx';

class Header extends React.Component {
  // Lifecycle methods...
  render() {
    // Calculations...
    const item = this.props.items[this.props.selectedIndex];
    const css = {};
    if (this.props.scrollOffset > 0) {
        css.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0.4)';
    } else {
        css.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0)';
    }
    return (
      <header className='header' style={css}>
        <Menu items={this.props.items} width={this.props.width} selectedIndex={this.props.selectedIndex}/>
      </header>
    );
  }
}

// Validate props

Header.propTypes = {
  items: React.PropTypes.array,
  scrollOfset: React.PropTypes.number,
  selectedIndex: React.PropTypes.number,
};

export default Header;