import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import ScrollView from '../../components/scrollview/ScrollView';
import { getScrollChangeAction } from '../../model/actions/creators/app-actions';
import { getResizeAction } from '../../model/actions/creators/app-actions';

class App extends React.Component {
  // Initialize!
  constructor(props) {
    super(props);
    // Bindings
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  // Handle resizing
  updateDimensions() {
    this.props.onSizeChange(window.innerWidth, window.innerHeight)
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
  // Draw the view...
  render() {
    // Calculations...
    return(
      <div className='app'>
        <Header {...this.props} />
        <ScrollView {...this.props} />
      </div>
    )
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    items: store.appState.items,
    width: store.appState.width,
    height: store.appState.height,
    scrollOffset: store.appState.scrollOffset,
    selectedIndex: store.appState.selectedIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onScrollChange: (position) => {
      dispatch(getScrollChangeAction(position));
    }, 
    onSizeChange: (width, height) => {
      dispatch(getResizeAction(width, height));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);