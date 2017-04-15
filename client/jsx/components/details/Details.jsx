import React from 'react';
import DetailItem from '../details/DetailItem.jsx';

const Details = ({details}) => {
  const detailItems = details.map((detail, i) => {
    const uniqid = `detail-${i}`;
    return <DetailItem key={uniqid} {...detail} />;
  });
  return (
    <ul className='details'>
      {detailItems}
    </ul>
  );
}

// Validate props

Details.propTypes = {
  details: React.PropTypes.array,
};

export default Details;