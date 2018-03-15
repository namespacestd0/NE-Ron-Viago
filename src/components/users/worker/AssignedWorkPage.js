import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fulfillCustomerLocal } from '../../../actions/courseActions';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import AssignedWorkItem from './AssignedWorkItem';

const textNothingToDisplay = {
  title: 'All Done',
  authorId: 'No More Tasks'
};

function filterAssignedUnfinishedCourse(arrayOfCourses) {
  return arrayOfCourses.filter(course =>
    course.watchHref == "Enrolled" && course.category != 0)
    .slice().sort(function (a, b) {
      let nameA = a.id;
      let nameB = b.id;
      if (nameA < nameB) { return -1; }
      if (nameA > nameB) { return 1; }
      return 0;
    });
}

class AssignedWorkPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      eligibleCourses: filterAssignedUnfinishedCourse(this.props.courses),
      indexOfCourseToDisplay: 0,
      textToDisplay: textNothingToDisplay
    };
    this.reduceHour = this.reduceHour.bind(this);
  }
  componentWillMount() {
    if (this.state.eligibleCourses.length > 0)
      this.setState({ textToDisplay: this.state.eligibleCourses[this.state.indexOfCourseToDisplay] });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.courses != this.props.courses) {
      let newEligibleCourses = filterAssignedUnfinishedCourse(nextProps.courses);
      if (newEligibleCourses.length > 0)
        this.setState({
          textToDisplay: newEligibleCourses[this.state.indexOfCourseToDisplay],
          indexOfCourseToDisplay: 0,
          eligibleCourses: newEligibleCourses
        });
      else
        this.setState({
          textToDisplay: textNothingToDisplay,
          indexOfCourseToDisplay: 0,
          eligibleCourses: newEligibleCourses
        });
    }
  }
  reduceHour() {
    this.props.dispatch(fulfillCustomerLocal(this.state.eligibleCourses[this.state.indexOfCourseToDisplay].id));
  }

  render() {
    return (
      <AssignedWorkItem
        h1={this.state.textToDisplay.title}
        h2={this.state.textToDisplay.authorId}
        h3={this.state.textToDisplay.length}
        buttonHidden={this.state.textToDisplay.title == 'All Done' ? true : false}
        buttonText={`${this.state.textToDisplay.category} Hours Left`}
        buttonAction={this.reduceHour}
      />
    );
  }
}

AssignedWorkPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(AssignedWorkPage);
