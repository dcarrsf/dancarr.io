import React from 'react';
import {connect} from 'react-redux';
import Page from '../../components/page/Page';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'PROJECTS',
            details: [
              {
                title: 'T. Rowe Price',
                years: '2017',
                type: 'AWS, AngularJS, ES6, SASS, Boostrap, Webpack 2',
                pub: '',
                url: ['https://www.grove.com/'],
                description: 'Designed, developed, and deployed the Team Tools Webkit for T. Rowe Price. Partnering with The Grove Consultants International in San Francisco, the webkit provides tools and exercises for team growth. The single page app was built with AngularJS and Webpack 2, deployed to Amazon Web Services as a Static Website utilizing the CloudFront CDN and integrated TRP authentication services.'
              }, {
                title: 'Philips',
                years: '2016',
                type: 'AngularJS, SASS, Boostrap, Gulp',
                pub: '',
                url: ['https://www.grove.com/'],
                description: 'Designed and developed the Team Tools Webkit for the Philips intranet. Partnering with The Grove, the webkit provides best practices for team development, and templates used by the Philips team to create custom content. The single page app was built with AngularJS and Bootstrap. This version of the webkit was refined with a new responsive design layout targeting all screen sizes.'
              }, {
                title: 'Ree 3',
                years: '2016',
                type: 'iOS10, Swift 3, Xcode 10',
                pub: '3+ ',
                url: ['http://myweb.com/','https://itunes.apple.com/app/id853446994'],
                description: 'Developed Ree sticker app for iOS (currently in version 3 on the Apple Store). Version 3 continues the partnership with the CLC and a growing list of collegiate sports teams, bringing their mascots to life as iOS emoji’s. Designed application architecture, UX, custom keyboards (emoji and alpha-numeric), and custom iMessage app. Maintained code bases in Objective C and Swift. Worked with creative team including artists from Pixar, Marvel, DC Comics, Universal Studies, and Disney.'
              }, {
                title: 'Realtime Immersion Studios',
                years: '2015',
                type: 'ActionScript 3.0, JavaScript/HTML5, C++, OpenGL, OpenCL',
                pub: '6+',
                url: ['http://www.rtistudios.com/'],
                description: 'Delivered solutions to support RTi’s cutting edge video technologies. Created GPU video effect plugin in OpenCL, OpenGL, and C++. Built HTML5 and Flash video players for panoramic video presentations. Debugged live and on-demand streaming and progressive video. Developed video players for touch screen. Created video player for RTI Studios website. Packaged video players for distribution to third parties. Authored component documentation and supporting resources.'
              }, {
                title: 'Kayak',
                years: '2014-2010',
                type: 'Ad Banners, ActionScript 3.0',
                pub: '500+',
                url: ['https://www.kayak.com/', 'https://www.kayak.com/flippy'],
                description: 'Dan developed 3D animation engine for Kayak’s branded flip board banners. Originally created for the Kayak “Make a Flippy” campaign. Packaged as components to support third-party distribution and ad banner production. Produced banners for Hotwire and Yahoo! Created Kayak marketing banners at common industry sizes. Localized components and marketing banners to 8+ European languages.'
              }, {
                title: 'The Grove Consultants International',
                years: '2014-2009',
                type: 'ActionScript 3.0, AngularJS, Boostrap',
                pub: '2+',
                url: ['https://www.grove.com/'],
                description: 'Leading web application development and design for The Grove in San Francisco. Interactive Flash project converted to HTML5 using AngularJS. Implemented modern modular JavaScript programming techniques. Web standard updates designed to run on Intranet in IE8 browsers and higher. Worked with The Grove and Gore teams to define specifications and objectives. Supported Gore team during review and launch.'
              }, {
                title: 'Aperian Global',
                years: '2014-2006',
                type: 'ActionScript 2.0/3.0, JavaScript/HTML 5',
                pub: '6+',
                url: ['http://www.aperianglobal.com/'],
                description: 'Dan developed GlobeSmart Commander (NATO) and GlobeSmart Soldier (US Army) applications with Aperian Global. Built application structure, user interface, and UX. Multimedia solutions including data-driven presentations, interactions, and audio and video presentations. Packaged for delivery by web or CD. Developed GlobeSmart app for corporate training. Worked with Aperian Global team to implement products across systems.'
              }, {
                title: 'Autodesk ',
                years: '2012-2007',
                type: 'ActionScript 2.0/3.0, JavaScript/HTML 5, Components',
                pub: '8+',
                url: ['http://www.autodesk.com/'],
                description: 'Dan created full-featured video players for Autodesk website. Produced geolocation marketing features. Implemented JavaScript API for website integration. Built supporting website design components. Worked with Autodesk art director to develop video templates and corporate branding guidelines. Trained design team in ActionScript programming and web design techniques.'
              }, {
                title: 'Williams-Sonoma ',
                years: '2011-2001',
                type: 'Authorware, ActionScript, JavaScript/HTML 5, e-learning',
                pub: '10+',
                url: ['http://www.williams-sonoma.com/'],
                description: 'Dan designed William-Sonoma University logo, trained learning teams, and developed training resources for Williams-Sonoma. Delivered turnkey graphic design and illustration services. Built branded e-learning application templates in Flash, Authorware, and HTML/JavaScript. Trained content teams’ production workflows in Freehand, Photoshop, Flash, and Dreamweaver.'
              }, {
                title: 'Johnson & Johnson, PRD',
                years: '2009-2004',
                type: 'ActionScript 2.0, JavaScript, Acrobat/PDF, e-Learning Components',
                pub: '6+',
                url: ['http://www.jnj.com/'],
                description: 'Dan provided ongoing application design and development services to Johnson and Johnson, PRD team. Designed 3+ drug development training courses. Developed 2 document notation and delivery systems. Worked with Johnson and Johnson instructional design team to define goals and requirements for projects. Trained team how to populate content in the apps. Trained software and design techniques. Worked onsite at offices in New Jersey to help with project launches, training, and implementation.'
              }, {
                title: 'Simon Fraser University',
                years: '2007-2004',
                type: 'ActionScript 2.0, JavaScript, e-Learning Components',
                pub: '3+',
                url: ['http://www.sfu.ca/', 'https://www.sfu.ca/snfchs/greek-language-program/odysseas.html'],
                description: 'Dan developed linguistics web applications for the Hellenic Studies department at Simon Fraser University. Created Greek / Chinese language tutor app. Designed application structure, quiz system, learning interactions, and UX. Worked with SFU team to develop concepts and designs, define feature requirements, and build back-end scripting and databases. Collaborated with teams in Los Angeles, Vancouver, Greece, and China.'
              }, {
                title: 'Krystal Co.',
                years: '2003-2002',
                type: 'ActionScript 2.0, JavaScript, e-Learning Components',
                pub: '4+',
                url: ['http://www.krystal.com/'],
                description: 'Dan provided application development and design services to Royal Rode’s University in Vancouver, and Krystal Hamburgers in Louisiana. The project was a joint effort where Dan developed learning interaction components and quizzing systems for Royal Rode’s, that were implemented in personnel training at Kaiser Co. Dan continued to work with Krystal designing and developing interactive safety training modules, and video-based training applications.'
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

export default connect(mapStateToProps)(Projects);