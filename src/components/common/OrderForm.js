import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import { authorsFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';
import OrderInput from './input/OrderInput';

export class OrderForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Object.assign({}, props.prefill),
      errors: {},
      saving: false
    };
    this.updateInputState = this.updateInputState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.prefill.id != nextProps.prefill.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({ data: Object.assign({}, nextProps.prefill) });
    }
  }

  updateInputState(event) {
    const field = event.target.name;
    let data = Object.assign({}, this.state.data);
    data[field] = event.target.value;
    return this.setState({ data: data });
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.data.title.length < 3) {
      errors.title = 'Name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({ saving: true });

    this.props.actions.saveCourse(this.state.data)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Saved');
    this.context.router.push(`/${this.props.redirectDest}`);
  }

  render() {
    return (
      <OrderInput
        buttonText={this.props.buttonText}
        allAuthors={this.props.classes}
        onChange={this.updateInputState}
        onSave={this.saveCourse}
        course={this.state.data}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

OrderForm.propTypes = {
  redirectDest: PropTypes.string.isRequired,
  prefill: PropTypes.object.isRequired,
  buttonText: PropTypes.string,
  classes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  orderId: PropTypes.string
};

//Pull in the React Router context so router is available on this.context.router.
OrderForm.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const customerName = ownProps.orderId; // from the path `/course/:id`

  let orderData = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (customerName && state.courses.length > 0) {
      orderData = getCourseById(state.courses, customerName);
  }
  return {
    classes: authorsFormattedForDropdown(state.authors),
    prefill: orderData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; //since filter returns an array, have to grab the first.
  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);