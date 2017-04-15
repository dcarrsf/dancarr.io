import React from 'react';

const DetailItem = ({title, description, url, icon, note, years, pub, type}) => {
  const cls = !icon ? '' : `glyphicon glyphicon-${icon}`;
  const handleClick = (e) => {
    window.open(url, '_blank');
  }
  return (
    <li className='detail-item' onClick={handleClick}>
      <h3>{title}</h3>
      <p className='description'>{description}</p>
      <p className='note'>{note}</p>
      <p className='year'>{years}</p>
      <p className='type'>{`${pub} ${type}`} <span className={cls}></span></p>
      <div className="line"></div>
    </li>
  );
}

// Validate props

DetailItem.propTypes = {
  title: React.PropTypes.string,
  years: React.PropTypes.string,
  pub: React.PropTypes.string,
  type: React.PropTypes.string,
  icon: React.PropTypes.string,
  url: React.PropTypes.array,
  description: React.PropTypes.string,
  note: React.PropTypes.string,
};

export default DetailItem;