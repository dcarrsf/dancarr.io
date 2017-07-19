import React from 'react';
import { Link } from 'react-router';

const Sidebar = ({logo, menu, selectedIndex, sidebarShowing, onSidebarChange}) => {
  const len = menu.length;
  const menuItems = [];
  // Build menu
  menu.forEach((item, i) => {
    const isSelected = selectedIndex === i;
    const uniqueKey = `item-${i}`;
    menuItems.push(
      <li key={uniqueKey}><Link to={item.route}>{item.label}</Link></li>
    );
  });
  const cls = sidebarShowing ? 'sidebar sidebar--open' : 'sidebar sidebar--close';
  const onChange = (event) => {
    onSidebarChange(false);
  };
  // Render sidebar
  return (
    <section className={cls}>
      <i className='sidebar__close fa fa-close' onClick={onChange}></i>
      <div className='sidebar__top'></div>
      <div className='sidebar__main'>
        <div className='sidebar__profile'></div>
        <h4>Dan Carr</h4>
        <p>Sr. Frontend Engineer contracting on the Disney Studios DAM team.</p>
        <a className='sidebar__button' href='https://www.linkedin.com/in/dcarrsf'>View Profile</a>
        <a href='https://www.linkedin.com/in/dcarrsf'>
          <div className='sidebar__linkedin'></div>
        </a>
        <hr className='sidebar__rule'/>
        <div className='sidebar__nav'>
          <ul>
            {menuItems}
          </ul>
        </div>
        </div>
    </section>
  );
}

// Validate props

Sidebar.propTypes = {
  logo: React.PropTypes.object,
  menu: React.PropTypes.array,
  selectedIndex: React.PropTypes.number,
};

export default Sidebar;
