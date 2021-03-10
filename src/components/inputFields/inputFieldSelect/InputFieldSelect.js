import React from 'react';
import { Formik, Form, useField } from 'formik';
import { TextField, Select, MenuItem, InputLabel } from '@material-ui/core';
import './inputFieldSelect.css';

const InputFieldSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      <Select className='formInput' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputFieldSelect;
