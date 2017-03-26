import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';

class App extends React.Component {
  // Draw the view...
  render() {
    // Calculations...
    return(
      <div className='app'>
        <Header {...this.props} />
        {/* NEST COMPOMNENTS HERE... */}
        {this.props.children}
      </div>
    )
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    items: store.appState.items,
    scrollOffset: store.appState.scrollOffset,
    selectedIndex: store.appState.selectedIndex,
  };
};

export default connect(mapStateToProps)(App);