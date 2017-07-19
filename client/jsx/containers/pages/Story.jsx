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
                title: 'Walt Disney Studios',
                type: 'Senior Frontend Engineer | UX Engineer',
                pub: '',
                years: '2017',
                url: ['http://www.waltdisneystudios.com/'],
                description: 'Dan is currently working on contract with the Studio DAM team providing UI development for multiple studio web apps. Check back soon for more details as the position develops.'
              }, {
                title: 'Codesmith',
                type: 'Senior Software Engineer | Lead Instructor',
                pub: '',
                years: '2017-2016',
                url: ['https://www.codesmith.io'],
                description: 'Dan spent the past year immersed in the JavaScript tech stack while leading curriculum at Codesmith, an immersive software engineering program located in Los Angeles. As Lead Instructor, Dan developed the advanced portions of the curriculum, and mentored and trained 150+ engineers now actively working in Los Angeles and Northern California. In addition to curriculum, Dan leads website development projects as resident Senior Software Engineer.'
              }, {
                title: 'Adobe',
                type: 'Consultant | Author | Community Leader',
                pub: '',
                years: '2016-2006',
                url: ['https://www.adobe.com'],
                description: 'Dan provides services to Adobe as a qualified vendor. Recent work includes projects with the Animate CC and Dreamweaver CC teams at Adobe MAX 2016. Dan’s vendor portfolio includes collaborative development with product teams in San Jose, San Francisco, and Bangalore, 100+ articles and tutorials for the Adobe Developer Center, 15+ articles and tutorials for Adobe Inspire Magazine, and 12+ Hello Videos for Adobe CC Learn. Contributions released globally in print and software, across 13+ languages.'
              }, {
                title: 'Macromedia',
                type: 'Software Engineer',
                pub: '',
                years: '2006-2000',
                url: ['https://www.adobe.com'],
                description: 'Dan’s work with Macromedia changed the landscape of e-learning component development. Dan worked as software engineer on the Flash, Flex, Dreamweaver, and Authorware teams, with continuous contributions to the e-learning and open-source communities. Developed first of its kind e-learning quiz components, and supported Flash and Flex teams as a dedicated component developer. Contributions released globally, across 13+ languages.'
              }, {
                title: 'Freelance',
                type: 'Independent Software Engineer',
                pub: '',
                years: '2017-1996',
                url: ['http://www.dancarr.io'],
                description: 'Dan leads development projects and consults on advisory boards for products and events. Recent work includes projects with T. Rowe Price, Philips, and Adobe Systems. Freelance portfolio includes extensive work as a qualified vendor with Adobe Systems, Johnson and Johnson, Autodesk, Kayak, Aperian Global, The Grove, and others, with scale ranging from pre-release product development to targeted turnkey solutions.'
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
