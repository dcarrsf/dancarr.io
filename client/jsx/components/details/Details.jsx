import React from 'react';
import DetailItem from '../details/DetailItem.jsx';

class Details extends React.Component {
  // Draw
  render() {
    // Calculations...
    const detailItems = this.props.details.map((detail, i) => {
      const uniqid = `detail-${i}`;
      return <DetailItem key={uniqid} {...detail} />;
    });
    return (
      <article className='details'>{detailItems}</article>
    );
  }
}

// Validate props

Details.propTypes = {
  details: React.PropTypes.array,
};

export default Details;