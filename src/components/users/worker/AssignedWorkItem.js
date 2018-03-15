import React, { PropTypes } from 'react';
import './styles.css';

class AssignedWorkItem extends React.Component {
  render() {
    return (
      <div className="jumbotron" id="workComponent">
        <h1>{this.props.h1}</h1>
        <p>{this.props.h2}</p>
        <p>{this.props.h3}</p>
        {this.props.buttonHidden || <button
          className="btn btn-primary btn-lg"
          onClick={this.props.buttonAction}
          type="button"
        >
          {this.props.buttonText}</button>}
      </div>
    );
  }
}
AssignedWorkItem.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
  h3: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHidden: PropTypes.bool.isRequired,
  buttonAction: PropTypes.func
};

export default AssignedWorkItem;
