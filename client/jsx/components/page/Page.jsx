import React from 'react';
import Details from '../details/Details';

const Page = (props) => {
  return (
    <div className='row'>
      <div className='col-xs-12 col-lg-4'>
        <h2>{props.title}</h2>
      </div>
      <div className='col-xs-12 col-lg-8'>
        <Details details={props.details} />
      </div>
    </div>
  );
}

export default Page;