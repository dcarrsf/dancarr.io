import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'SOFTWARE DEVELOPMENT',
            description: 'Lead engineer with extensive experience in component development, JavaScript programming, and application design. Passionate about learning, teaching, and leading initiatives with cutting edge technologies.',
            email: 'dan@dancarr.io',
            social: 'linkedin/in/dancarrsf',
        }
    }

  // Draw the view...
  render() {
    // Calculations...
    const mailto = `mailto:${this.state.email}`;
    const linkedin = `mailto:${this.state.email}`;
    return(
      <main className='home container'>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        {/*<a href={linkedin} className='email'>{this.state.social}</a> */}
        <a href={mailto} className='email'>{this.state.email}</a>
      </main>
    )
  }
}

export default Home;