import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page/Page';

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'CODE',
            details: [
              {
                title: 'dancarr.io',
                type: 'React, Redux, Node, Express, AWS',
                pub: '',
                years: '2017',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf/dancarr.io'],
                description: 'This site serves two purposes, as a quick reference for projects and publications, and a real-world playground with React, Node, and AWS. The frontend of the site is available on GitHub showing approaches to component design.'
              }, {
                title: 'dancarrdesign.com',
                type: 'Angular2+, Typescript, Karma, Jasmine, Webpack 2',
                pub: '',
                years: '2017',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf/dancarrdesign.com'],
                description: 'Check out this prototype of the 2015 dancarrdesign.com website built with my new Webpack / Angular2+ CLI prototype. The project implements Angular\'s new component structure and typescript features, along with bundling via Webpack.'
              }, {
                title: 'ngwp-cli',
                years: '2017',
                pub: '',
                icon: 'pencil',
                url: ['https://github.com/dcarrsf/ngwp-cli'],
                type: 'Angular2+, Typescript, Karma, Jasmine, Webpack 2',
                description: 'While preparing to start work at Disney, I kicked off a fun project building a Webpack-driven Angular2+ CLI. The project is based on the original Angular CLI and my explorations in build configurations from earlier this year. It\'s a work-in-progress, but there\'s plenty to see...'
              }, {
                title: 'github.com/dcarrsf',
                years: '',
                pub: '',
                icon: 'pencil',
                url: ['https://www.github.com/dcarrsf'],
                type: 'React, Redux, Angular, JavaScript, ActionScript',
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