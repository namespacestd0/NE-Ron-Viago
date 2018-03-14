import React, {PropTypes} from 'react';
import CourseListRow from './OrderListRow';

const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Customer Name</th>
        <th>Class</th>
        <th>Contact</th>
        <th>Hours</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course}/>
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
