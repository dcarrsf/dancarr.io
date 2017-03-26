import React from 'react';
import { Link } from 'react-router';

class Logo extends React.Component {
  // Lifecycle methods...
  render() {
    // Calculations...
    const cls = this.props.selected ? 'active' : 'normal';
    return (
      <div className='logo'>
        <Link className={cls} to={this.props.route}>
          <h1>{this.props.label}</h1>
        </Link>
      </div>
    );
  }
}

// Validate props

Logo.propTypes = {
  label: React.PropTypes.string,
  route: React.PropTypes.string,
  selected: React.PropTypes.bool,
};

export default Logo;