import React from 'react';
import debounce from '../../utils/debounce';

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
    debounce(onScrollChange(event.currentTarget.scrollTop, 100));
  };
  return (
    <section className='scroll-view' style={css} onScroll={scrollIt}>
      {/* EMBED ROUTER CHILDREN HERE! */}
      {children}
    </section>
  );
};

export default ScrollView;
