import React from 'react';
import DetailItem from '../details/DetailItem.jsx';

class Details extends React.Component {
  // Initialize!
  constructor(props) {
    super(props);
    // Bindings
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  // Handle resizing
  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  // Lifecycle methods...
  componentWillMount() {
      this.updateDimensions();
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  // Draw
  render() {
    // Calculations...
    const detailItems = this.props.details.map((detail, i) => {
      const uniqid = `detail-${i}`;
      return <DetailItem key={uniqid} {...detail} />;
    });
    const css = {
      height: `${this.state.height - 92}px`,
      paddingTop: '65px'
    };
    const scrollIt = (event) => {
      this.props.scrollHandler(event.currentTarget.scrollTop);
    };
    return (
      // const cls = 
        <article className='details' style={css} onScroll={scrollIt}>
            {detailItems}
        </article>
    );
  }
}

// Validate props

Details.propTypes = {
  details: React.PropTypes.array,
};

export default Details;

// Helper 

// function throttle(func, wait) {
//   var blocked = false;
//   var cache = null;
//   return function() {
//     if (!blocked) {
//       blocked = true;
//       cache = func.call();
//     }else{
//       setTimeout(function() {
//         blocked = false;
//       }, wait);
//     }
//   }
// }