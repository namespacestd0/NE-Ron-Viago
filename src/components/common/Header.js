/*eslint-disable import/default */
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img height={22} src={require('./images/pluralsight-logo.png')} />
        </Link>
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" >Home</IndexLink></li>
          <li><Link to="/orders" >Manager</Link></li>
          <li><Link to="/worker" >Staff</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/" >{loading && <LoadingDots interval={100} dots={20} />}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
