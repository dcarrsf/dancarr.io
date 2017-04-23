import React from 'react';
import Details from '../details/Details';

const Page = ({title, details}) => {
  return (
    <div className='row'>
      <div className='col-xs-12 col-lg-4'>
        <h2>{title}</h2>
      </div>
      <div className='col-xs-12 col-lg-8'>
        <Details details={details} />
      </div>
    </div>
  );
}

export default Page;