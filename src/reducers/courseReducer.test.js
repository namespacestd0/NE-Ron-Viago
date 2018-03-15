import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};

    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // assert
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });

  it('[134B] should delete order when passed DELETE_CUSTOMER_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const customerID = 'B';
    const action = actions.deleteCustomerSuccess(customerID);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('C');
  });

  it('[134B] should enroll customer when passed ENROLL_CUSTOMER_LOCAL', () => {
    // arrange
    const initialState = [
      {id: 'A', watchHref: 'Enroll'},
      {id: 'B', watchHref: 'Enroll'},
      {id: 'C', watchHref: 'Enrolled'}
    ];

    const customerID = 'B';
    const action = actions.enrollCustomerLocal(customerID);

    // act
    const newState = courseReducer(initialState, action);
    const updatedOrder = newState.find(a => a.id == customerID);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].watchHref).toEqual('Enroll');
    expect(newState[1].watchHref).toEqual('Enrolled');
    expect(newState[2].watchHref).toEqual('Enrolled');
    expect(updatedOrder.watchHref).toEqual('Enrolled');
  });

  it('[134B] should reduce order hour by 1 when passed FULFILL_CUSTOMER_LOCAL', () => {
    // arrange
    const initialState = [
      {id: 'A', category: '3'},
      {id: 'B', category: '3'},
      {id: 'C', category: '3'}
    ];

    const customerID = 'B';
    const action = actions.fulfillCustomerLocal(customerID);

    // act
    const newState = courseReducer(initialState, action);
    const updatedOrder = newState.find(a => a.id == customerID);

    // assert
    expect(newState.length).toEqual(3);
    expect(updatedOrder.category).toEqual('2');
  });
});
