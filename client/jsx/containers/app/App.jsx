import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import ScrollView from '../../components/scrollview/ScrollView';
import Sidebar from '../../components/sidebar/Sidebar';
import { getScrollChangeAction } from '../../model/actions/creators/app-actions';
import { getResizeAction } from '../../model/actions/creators/app-actions';
import debounce from '../../utils/debounce';

class App extends React.Component {
  // Initialize!
  constructor(props) {
    super(props);
    // Bindings
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  // Handle resizing
  updateDimensions() {
    debounce(this.props.onSizeChange(window.innerWidth, window.innerHeight), 100);
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
        <Sidebar {...this.props} />
      </div>
    )
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    logo: store.appState.logo,
    menu: store.appState.menu,
    width: store.appState.width,
    height: store.appState.height,
    scrollOffset: store.appState.scrollOffset,
    selectedIndex: store.appState.selectedIndex,
  };
};

// Redux dispatch (action creators)
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

// Connect bindings to Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);