import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../../actions/courseActions';
import CourseList from './OrderList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class OrderPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.enrollCustomer = this.enrollCustomer.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/order');
  }
  successMessage() {
    toastr.success('Saved');
  }
  deleteCustomer(id) {
    this.props.actions.deleteCustomer(id)
    .then(() => this.successMessage())
    .catch(error => {
      toastr.error(error);
    });
  }
  enrollCustomer(id) {
    this.props.dispatch(this.props.actions.enrollCustomerLocal(id));
  }
  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Manage Orders</h1>
        <input type="submit"
               value="Add Order"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList 
          courses={courses} 
          deleteCustomer={this.deleteCustomer}
          enrollCustomer={this.enrollCustomer}
          />
      </div>
    );
  }
}

OrderPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
    dispatch: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
