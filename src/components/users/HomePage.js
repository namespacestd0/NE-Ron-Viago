import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>College Reimagined</h1>
        <p>Learn about our revolutionary 1:1 learning experience.</p>
        <Link to="quote" className="btn btn-primary btn-lg">Get A Free Quote</Link>
      </div>
    );
  }
}

export default HomePage;
