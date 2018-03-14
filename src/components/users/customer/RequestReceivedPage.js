import React from 'react';
import {Link} from 'react-router';

class RequestReceivedPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Thank you for your interest.</h1>
        <p>We'll get back to you soon.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default RequestReceivedPage;
