import React from 'react';

class DetailItem extends React.Component {
  // Lifecycle methods...
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // Open link
  handleClick(event) {
    window.open(this.props.url, '_blank');
  }
  render() {
    // Calculations...
    const cls = !this.props.icon ? '' : `glyphicon glyphicon-${this.props.icon}`;
    return (
        <li className='detail-item' onClick={this.handleClick}>
            <h3>{this.props.title}</h3>
            <p className='description'>{this.props.description}</p>
            <p className='note'>{this.props.note}</p>
            <p className='year'>{this.props.years}</p>
            <p className='type'>{`${this.props.pub} ${this.props.type}`} <span className={cls}></span></p>
            <div className="line"></div>
        </li>
    );
  }
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