import React from 'react';
import { Link } from 'react-router';

const Logo = ({label, route, selected}) => {
  const cls = selected ? 'active' : 'normal';
  return (
    <div className='logo'>
      <Link className={cls} to={route}>
        <h1>{label}</h1>
      </Link>
    </div>
  );
}

// Validate props

Logo.propTypes = {
  label: React.PropTypes.string,
  route: React.PropTypes.string,
  selected: React.PropTypes.bool,
};

export default Logo;