import React from 'react';
import { Formik, Form, useField } from 'formik';
import { TextField, Select, MenuItem, InputLabel } from '@material-ui/core';
import './inputFieldText.css';

const InputFieldText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='inputStyle'>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      <TextField className='formInput' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputFieldText;
