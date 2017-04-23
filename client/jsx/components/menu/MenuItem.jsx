import React from 'react';
import { Link } from 'react-router';

const MenuItem = ({ label, labelShort, icon, width, route, selected }) => {
  const cls1 = selected ? 'menu-item active-item' : 'menu-item normal-item';
  const cls2 = selected ? 'active' : 'normal';
  const lbl = width >= 768 ? label : labelShort;
  return (
    <li className={cls1}>
      <Link className={cls2} to={route}>{lbl}</Link>
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
