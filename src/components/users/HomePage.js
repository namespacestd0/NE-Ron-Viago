import React from 'react';
import {Link} from 'react-router';
import RequestQuotePage from './customer/RequestQuotePage';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>See through your eyes</h1>
        <p>Learn about our effetive 1:1 learning experience.</p>
        <Link to="quote" className="btn btn-primary btn-lg">Get A Free Quote</Link>
      </div>
    );
  }
}

export default HomePage;
