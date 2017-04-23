import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page/Page';

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'OPEN-SOURCE',
            details: [
              {
                title: 'dancarr.io',
                type: 'React, Redux, Node, Express, AWS',
                pub: '',
                years: '2017',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf/dancarr.io'],
                description: 'This site serves two purposes; a quick reference for projects and publications, and a real-world playground with React, Node, and AWS. The frontend of the site is available on GitHub showing approaches to component design.'
              }, {
                title: 'webpack-2-starters',
                years: '2017',
                pub: '',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf/webpack-2-starters'],
                type: 'Webpack 2, React, Redux, AngularJS, Typescript',
                description: 'The webpack-2-starter project was created to help jumpstart coding with JavaScript libraries that require tooling and configuration. The project supplies Webpack templates for common configurations used in application and component development, including environments for development, production, and hot reloading from a custom Node server.'
              }, {
                title: 'webapi-design-patterns',
                years: '2017',
                pub: '',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf/webapi-design-patterns'],
                type: 'Vanilla ES6, Web API',
                description: 'This mini-project evolved out of a need to move away from jQuery in favor of vanilla web API. jQuery is powerful, but it is heavy and includes many features we do not commonly use. That said, the simplicity and breivity of the jQuery syntax is preferable to the more verbose web API methods. This library provides a simple jQuery-like syntax, built around a minimal core API.'
              }, {
                title: 'github.com/dcarrsf',
                years: '',
                pub: '',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf'],
                type: 'React, AngularJS, JavaScript, ActionScript',
                description: 'Check out the dcarrsf repos on GitHub for a mixture of current projects, studies from the previous year’s explorations in JavaScript, and archived open-source ActionScript projects.'
              }
            ]
        }
    }

  // Draw the view...
  render() {
    // Calculations...
    return(
      <main className='page container-fluid'>
        <Page {...this.state} {...this.props} />
      </main>
    )
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    width: store.appState.width,
    height: store.appState.height,
  };
};

export default connect(mapStateToProps)(Code);