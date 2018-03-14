import React, { PropTypes } from 'react';
import CourseListRow from './OrderListRow';

const CourseList = ({ courses, deleteCustomer, enrollCustomer }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Customer Name</th>
          <th>Class</th>
          <th>Contact</th>
          <th>Hours</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListRow
            key={course.id}
            course={course}
            deleteCustomer={deleteCustomer}
            enrollCustomer={enrollCustomer}
          />
        ).slice().sort(function (a, b) {
          let nameA = a.props.course.id;
          let nameB = b.props.course.id;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  enrollCustomer: PropTypes.func.isRequired
};

export default CourseList;
