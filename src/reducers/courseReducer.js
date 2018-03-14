import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case types.DELETE_CUSTOMER_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.customerID)
      ];

    case types.ENROLL_CUSTOMER_LOCAL:
      return [
        ...state.filter(course => course.id !== action.customerID),
        enrolltoEnrolled(state.filter(course => course.id == action.customerID)[0])
      ];

    default:
      return state;
  }
}

function enrolltoEnrolled(order) {
  let o = Object.assign({}, order)
  o.watchHref = "Enrolled";
  return o;
}
