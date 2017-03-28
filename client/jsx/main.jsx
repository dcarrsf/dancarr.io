import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// App component
import App from './containers/app/App';
import Home from './containers/home/Home';
import Code from './containers/pages/Code';
import Projects from './containers/pages/Projects';
import Publications from './containers/pages/Publications';
import Story from './containers/pages/Story';

// Redux store
import store from './model/store.js';

// App css
import '../sass/main.scss';

// Enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    { /* Tell the Router to use the enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/code" component={Code}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/publications" component={Publications}/>
        <Route path="/story" component={Story}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app1')
);