import React from 'react';
import Details from '../details/Details';

class Page extends React.Component {

  // Draw the view...
  render() {
    // Calculations...
    return(
        <div className='row'>
            <div className='col-xs-12 col-lg-4'>
            <h2>{this.props.title}</h2>
            </div>
            <div className='col-xs-12 col-lg-8'>
            <Details details={this.props.details} />
            </div>
        </div>
    )
  }
}

export default Page;