import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: 'SENIOR JAVASCRIPT ENGINEER',
        email: 'dan@dancarr.io',
      }
    }

  // Draw the view...
  render() {
    // Calculations...
    const mailto = `mailto:${this.state.email}`;
    const linkedin = `mailto:${this.state.social}`;
    return(
      <main className='home container'>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <a href={mailto} className='email'>{this.state.email}</a>
      </main>
    )
  }
}

export default Home;