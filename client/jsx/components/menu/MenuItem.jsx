import React from 'react';
import { Link } from 'react-router';

const MenuItem = ({ label, route, selected }) => {
  const cls = selected ? 'active' : 'normal';
  return (
    <li className="menu-item">
      <Link className={cls} to={route}>{label}</Link>
    </li>
  );
};

// Validate props

MenuItem.propTypes = {
  label: React.PropTypes.string,
  route: React.PropTypes.string,
  selected: React.PropTypes.bool,
};

export default MenuItem;
