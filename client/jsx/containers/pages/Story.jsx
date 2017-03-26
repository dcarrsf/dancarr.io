import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page/Page';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'STORY',
            details: [
              {
                title: 'Codesmith',
                type: 'Senior Software Engineer | Lead Instructor',
                pub: '',
                years: '2017-2016',
                url: ['https://www.codesmith.io'],
                description: 'Dan leads lectures and curriculum for the junior and senior cohorts, and leads website development as resident Senior Software Engineer. Recent curriculum additions include system design approach, component architecture, design patterns in JavaScript, and React / Redux approach. Recent projects include server-side component architectures in Node and Express. Ongoing support and mentoring for students and Codesmith community.'
              }, {
                title: 'Adobe',
                type: 'Senior Software Engineer | Technical Writer',
                pub: '',
                years: '2016-2006',
                url: ['https://www.adobe.com'],
                description: 'Dan provides services to Adobe as a qualified vendor. Recent work includes projects with the Animate CC, Dreamweaver CC, and Create Magazine teams. Dan’s vendor portfolio includes collaborative development with product teams, 100+ articles and tutorials for the Adobe Developer Center, 15+ articles and tutorials for Adobe Inspire Magazine, and 12+ Hello Videos for Adobe CC Learn. Participated in 10+ pre-release cycles, contributed to product development, moderated Adobe website, innovated as community leader, and trained Adobe personnel. Contributions released globally in print and software, across 13+ languages.'
              }, {
                title: 'Macromedia',
                type: 'Software Engineer',
                pub: '',
                years: '2006-2000',
                url: ['https://www.adobe.com'],
                description: 'Dan’s work with Macromedia changed the landscape of e-learning and component development. Dan worked as engineer on the Flash, Flex, Dreamweaver, and Authorware teams, with continuous contributions to the e-learning and open-source communities. Authored 12+ Macromedia DevNet tutorials on component development and video production. Contributions released globally, across 13+ languages.'
              }, {
                title: 'Dan Carr Design',
                type: 'Senior Software Engineer | Trainer',
                pub: '',
                years: '2017-1999',
                url: ['http://www.dancarr.io'],
                description: 'Dan leads development projects and consults on advisory boards for products and events. Recent work includes projects with T. Rowe Price, Philips, and Adobe Systems. Established in San Francisco in the 90’s, the Dan Carr Design portfolio includes extensive work as a qualified vendor with Johnson and Johnson, Autodesk, Kayak, NATO / US Army, Intel, and Adobe / Macromedia, with scale ranging from pre-release product development to targeted global turnkey solutions. Disciplines include frontend design and UX, full-stack software engineering and development, project management, curriculum development and training, and technical writing.'
              }
            ]
        }
    }

  // Draw the view...
  render() {
    // Calculations...
    return(
      <section className='story page container-fluid'>
        <Page {...this.state} {...this.props} />
      </section>
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

export default connect(mapStateToProps)(Story);
