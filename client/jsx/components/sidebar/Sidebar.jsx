import React from 'react';

const Sidebar = ({logo, menu, selectedIndex}) => {
  const len = menu.length;
  const menuItems = [];
  // Build menu
  menu.forEach((item, i) => {
    const isSelected = selectedIndex === i;
    const uniqueKey = `item-${i}`;
    menuItems.push(
      <li key={uniqueKey}><a href={item.route}>{item.label}</a></li>
    );
  });
  const closeMenu = (event) => {

  };
  // Render sidebar
  return (
    <section className='sidebar'>
      <i className='sidebar__close fa fa-close' onClick={closeMenu}></i>
      <div className='sidebar__top'></div>
      <div className='sidebar__main'>
        <div className='sidebar__profile'></div>
        <h4>Dan Carr</h4>
        <p>Senior JavaScript Engineer Seeks Application Development and Engineering Management Roles in Los Angeles</p>
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