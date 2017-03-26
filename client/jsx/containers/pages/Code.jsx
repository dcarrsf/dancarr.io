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
                url: ['https://www.github.com/dcarrsf/dancarrio'],
                description: 'After a year of leading curriculum and the engineering team at Codesmith, it was exciting to return to work on the dancarr.io website. The 2015 AngularJS version has been re-invented using React and Node, deployed as a full-stack app on AWS.',
                note: 'The first phase of the site is available on GitHub as a study in personal portfolio development.'
              }/*, {
                title: 'design-patterns.io',
                years: '2017',
                pub: '1 ',
                icon: 'pencil',
                type: 'ES6, React, Redux, Node, Express, AWS',
                description: '“Design patterns have been part of my programming experience for years, but while teaching these concepts I realized there was still much to learn.” And that was the start of the design-patterns.io project. The goal of the project is to explore classic OOP design patterns in JavaScript and Typescript, with supporting visualizations. The first iteration of the website is available on GitHub.'
              }, {
                title: 'webpack-2-starters',
                years: '2017',
                pub: '1 ',
                icon: 'pencil',
                type: 'React, Redux, AngularJS, Typescript',
                description: 'Dan created the webpack-2-starters project for Codesmith to help jumpstart coding with JavaScript libraries that require tooling and configuration. The project will be carried forward by Codesmith students as a practice in build tool setup and project organization.'
              }*/, {
                title: 'github.com/dcarrsf',
                years: '',
                pub: '9+ ',
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