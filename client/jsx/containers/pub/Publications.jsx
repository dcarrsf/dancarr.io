import React from 'react';
import {connect} from 'react-redux';
import Details from '../../components/details/Details';
import getScrollChangeAction from '../../model/actions/creators/app-actions';

class Publications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'PUBLICATIONS',
            description: '',
            details: [
              /*{
                title: 'Medium',
                type: 'articles',
                pub: '0',
                years: '2017',
                description: '2016 was a blur of teaching and learning, with many discoveries to share. Check out the start of Dan’s new article series on Medium, supporting his design-patterns.io project. The first article looks at the origin of object oriented design patterns and where they fit in with today\'s JavaScript world.'
              }, */{
                title: 'Adobe Create Magazine',
                type: 'article',
                pub: '1',
                years: '2016',
                description: 'In 2015 the Adobe Inspire Magazine was retired and rebranded into the Adobe Create Magazine. Dan was invited to contribute new versions of his most popular articles and tutorials in Dreamweaver and Photoshop. Check out the first article on creating a photo gallery website using Bootstrap in Dreamweaver CC.'
              }, {
                title: 'Pluralsight',
                type: '5-hour video courses',
                pub: '2 - ',
                years: '2015',
                description: 'Dan created two 5-hour video courses in web development and mobile for Pluralsight. The first course dives deep into creating a responsive website using Bootstrap in Dreamweaver CC. Along the way you explore development and design workflows, and learn how to use Bootstrap components. The second course takes an in-depth look at building mobile apps with Adobe PhoneGap and Dreamweaver CC.'
              }, {
                title: 'Adobe CC Learn',
                type: 'videos, articles',
                length: '5-Min',
                pub: '20+',
                years: '2015-2014',
                description: 'In 2014 and 2015, Dan partnered with CC Learn to create a series of 12+ video tutorials for Dreamweaver CC and Photoshop CC. The 5-minute tutorials focus on a range of feature topics, appearing as Hello videos in the opening screens of both products, as well as features on the Adobe website. '
              }, {
                title: 'SitePoint',
                type: 'article, tutorial',
                pub: '1',
                years: '2014',
                description: 'Dan had the opportunity to work on a joint project with Adobe and SitePoint, highlighting the animation and design features of Adobe Edge Animate. The project was a take-off on an infographics article published by an Adobe PM, exploring technical communication thru infographic design and interactivity.'
              }, {
                title: 'Adobe Inspire Magazine',
                type: 'articles, videos, tutorials',
                pub: '30+',
                years: '2014-2012',
                description: 'In 2012, Dan’s work with the ADC shifted to new tutorial and publication work with the Adobe Inspire Magazine. Dan produced 20+ articles, tutorials, and video screencasts covering topics in emerging HTML5 technologies and their effect on web development and workflows with Adobe tools.'
              }, {
                title: 'Adobe Developer Connection',
                type: 'articles, tutorials',
                pub: '100+',
                years: '2012-2006',
                description: 'Dan produced 100+ articles and tutorials for the Adobe Developer Connection (ADC). Dan was a resident expert on web development and design, and programming and development in ActionScript and related technologies. As a community leader, Dan provided extensive help to online communities, presented topics at Adobe events, and moderated the Adobe website. Many articles are still available and can be found under Dan’s Adobe author bio.'
              }, {
                title: 'Macromedia DevNet',
                type: 'articles, tutorials',
                pub: '20+',
                years: '2006-2002',
                description: 'Dan\'s technical writing pursuits launched while working as an engineer on the Flash team. The product manager commissioned Dan to write a series of articles about the (then) new Flash Video features and components. He produced 20+ articles, tutorials, and component releases, and supported the open-source community with projects related to e-learning and web development.'
              }, {
                title: 'Delmar-Thompson Learning',
                type: 'book',
                pub: '1',
                years: '2002',
                description: 'Dan\'s first voyage into technical writing was also his largest publication effort. In 2001, he co-authored and lead the development of the book Inside Fireworks MX, covering topics in web design workflows. The 356-page book was well received as part of the Inside Macromedia MX series.'
              }
            ]
        }
    }

  // Draw the view...
  render() {
    // Calculations...
    return(
      <main className='publications container-fluid'>
        <div className='row'>
          <div className='col-xs-5'>
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
          </div>
          <div className='col-xs-7'>
           <Details details={this.state.details} scrollHandler={this.props.onScrollChange}/>
          </div>
        </div>
      </main>
    )
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    scrollOffset: store.appState.scrollOffset,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onScrollChange: (position) => {
      dispatch(getScrollChangeAction(position));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);