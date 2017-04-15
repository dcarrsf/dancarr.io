import React from 'react';

const ScrollView = ({width, height, scrollOffset, onScrollChange, children}) => {
  // Dynamically control height
  const bottom = width >= 1024 ? 76 : 118;
  const css = {
    height: `${height - bottom}px`,
  };
  // Reset scroll position
  if (scrollOffset === 0) {
    const sv = document.getElementsByClassName('scroll-view')[0];
    if (sv) sv.scrollTop = 0;
  }
  // Handle scroll change
  const scrollIt = (event) => {
    onScrollChange(event.currentTarget.scrollTop);
  };
  return (
    <section className='scroll-view' style={css} onScroll={scrollIt}>
      {/* EMBED ROUTER CHILDREN HERE! */}
      {children}
    </section>
  );
};

/*class ScrollView extends React.Component {
  // Draw
  render() {
    // Dynamically control height
    const bottom = this.props.width >= 1024 ? 76 : 118;
    const css = {
      height: `${this.props.height - bottom}px`,
    };
    // Reset scroll position
    if (this.props.scrollOffset === 0) {
      const sv = document.getElementsByClassName('scroll-view')[0];
      if (sv) {
        sv.scrollTop = 0;
      }
    }
    // Handle scroll change
    const scrollIt = (event) => {
      this.props.onScrollChange(event.currentTarget.scrollTop);
    };
    return ( 
        <section className='scroll-view' style={css} onScroll={scrollIt}>
          {this.props.children}
        </section>
    );
  }
}*/

export default ScrollView;

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