import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

const OrderInput = ({course, allAuthors, onSave, onChange, saving, errors, buttonText = 'Save'}) => {
  return (
    <form>
      <TextInput
        name="title"
        label="Name"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Service"
        value={course.authorId}
        defaultOption="Select Class"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="category"
        label="Hours"
        value={course.category.toString()}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Contact"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={buttonText}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

OrderInput.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
  buttonText: React.PropTypes.string
};

export default OrderInput;
