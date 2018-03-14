import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../../actions/courseActions';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import AssignedWorkItem from './AssignedWorkItem';

class AssignedWorkPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.reduceHour = this.reduceHour.bind(this);
  }

  reduceHour(id) {
    // this.props.dispatch(this.props.actions.enrollCustomerLocal(id));
  }

  render() {
    const { courses } = this.props;
    let itemToDisplay = {
      title: 'All Done',
      authorId: 'No More Tasks'
    };
    let enrolledCourses = courses.filter(course => 
      course.watchHref == "Enrolled" && course.category != 0);
    if (enrolledCourses.length>0)
      itemToDisplay = enrolledCourses[0];
    return (
      <AssignedWorkItem 
        h1 = {itemToDisplay.title}
        h2 = {itemToDisplay.authorId}
        h3 = {itemToDisplay.length}
        buttonHidden = {itemToDisplay.title == 'All Done' ? true : false}
        buttonText = {`${itemToDisplay.category} Hours Left`}
        buttonAction = {this.reduceHour}
      />
    );
  }
}

AssignedWorkPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AssignedWorkPage);
