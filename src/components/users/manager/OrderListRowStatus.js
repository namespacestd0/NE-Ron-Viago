import React, { PropTypes } from 'react';

class CourseListRowStatus extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.status == "Enrolled") 
    return (
      <td>Enrolled</td>
    );
    return (
      <td><a onClick={this.props.enroll} >{this.props.status}</a></td>
    );
  }
}

CourseListRowStatus.propTypes = {
  status: PropTypes.string.isRequired,
  enroll: PropTypes.func.isRequired
};

export default CourseListRowStatus;
