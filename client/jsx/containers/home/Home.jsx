import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'SOFTWARE DEVELOPMENT',
            description: 'Lead engineer with extensive experience in component development, JavaScript programming, and application design. Passionate about learning, teaching, and leading initiatives with cutting edge technologies.',
            email: 'dan@dancarr.io',
            // social: 'linkedin.com/in/dancarrsf',
        }
    }

  // Draw the view...
  render() {
    // Calculations...
    return(
      <main className='home container'>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <p className='email'>{this.state.email}</p>
        {/* <p className='email'>{this.state.social}</p>*/}
      </main>
    )
  }
}

export default Home;