import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import OrderListRowStatus from './OrderListRowStatus';

class CourseListRow extends React.Component {
  constructor() {
    super();
    this.deleteCustomerProvidingID = this.deleteCustomerProvidingID.bind(this);
    this.enrollCustomer = this.enrollCustomer.bind(this);
  }
  deleteCustomerProvidingID() {
    this.props.deleteCustomer(this.props.course.id);
  }
  enrollCustomer() {
    this.props.enrollCustomer(this.props.course.id);
  }
  render() {
    return (
      <tr>
        <td><Link to={'/order/' + this.props.course.id}>Edit</Link></td>
        <td>{this.props.course.title}</td>
        <td>{this.props.course.authorId}</td>
        <td>{this.props.course.length}</td>
        <td>{this.props.course.category}</td>
        <OrderListRowStatus
          status={this.props.course.watchHref}
          enroll={this.enrollCustomer}
        />
        <td><a onClick={this.deleteCustomerProvidingID} >✓</a></td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  enrollCustomer: PropTypes.func.isRequired
};

export default CourseListRow;
