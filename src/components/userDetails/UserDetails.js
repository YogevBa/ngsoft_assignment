import React from 'react';
import './userDetails.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputFieldText from '../../components/inputFields/inputFieldText/InputFieldText';

import { Button, MenuItem, Select, InputLabel } from '@material-ui/core';
import { text } from '../../textSource';
import { setFormView, saveData } from '../../redux/actions';
import { connect } from 'react-redux';

const UserDetails = (props) => {
  const handleSubmit = async (values) => {
    if (values) {
      await props.saveData(values, 'userDetails');
      props.setFormView('goodsDetails');
    }
  };
  return (
    <div className='userDetailsContainer'>
      <h2 className='subTitle'>{text.userDetailsTitle}</h2>
      <Formik
        initialValues={{
          supplierName: props.userDetails ? props.userDetails.supplierName : '',
          sourceSelect: props.userDetails ? props.userDetails.sourceSelect : '',
          businessID: props.userDetails ? props.userDetails.businessID : '',
          fullName: props.userDetails ? props.userDetails.fullName : '',
          ID: props.userDetails ? props.userDetails.ID : '',
          email: props.userDetails ? props.userDetails.email : '',
          mobileNumber: props.userDetails ? props.userDetails.mobileNumber : '',
          phoneNumber: props.userDetails ? props.userDetails.phoneNumber : '',
          faxNumber: props.userDetails ? props.userDetails.faxNumber : '',
        }}
        validationSchema={Yup.object().shape({
          supplierName: Yup.string().required('שדה חובה'),
          fullName: Yup.string().required('שדה חובה'),
          sourceSelect: Yup.string().required('שדה חובה'),

          businessID: Yup.number().required('שדה חובה').positive().integer(),
          ID: Yup.number().required('שדה חובה').positive().integer(),

          mobileNumber: Yup.number().required('שדה חובה').positive().integer(),
          phoneNumber: Yup.number().required('שדה חובה').positive().integer(),
          faxNumber: Yup.number().positive().integer(),

          email: Yup.string()
            .email('יש להזין כתובת מייל תקינה')
            .required('שדה חובה'),
        })}
        onSubmit={(data) => handleSubmit(data)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className='userDetailsForm' onSubmit={handleSubmit}>
            <h4 className='groupTitle'>{text.supplierDetails}</h4>

            <div className='groupContainer'>
              <InputFieldText
                label={text.supplierName}
                name='supplierName'
                type='text'
              />
              <div className='selectStyle'>
                <InputLabel name='sourceSelect' id='sourceSelect'>
                  {text.chooseSource}
                </InputLabel>
                <Select
                  labelId='sourceSelect'
                  id='sourceSelect'
                  value={values.sourceSelect}
                  onChange={handleChange}
                  name='sourceSelect'
                >
                  {props.origins
                    ? props.origins.map((itm) => (
                        <MenuItem key={itm.id} value={itm.title}>
                          {itm.title}
                        </MenuItem>
                      ))
                    : []}
                </Select>
              </div>
              <InputFieldText
                label={text.businessID}
                name='businessID'
                type='number'
              />
            </div>
            <div className='styledLine'></div>
            <h3 className='groupTitle'>{text.supplierDetails}</h3>
            <div className='groupContainer'>
              <InputFieldText
                label={text.fullName}
                name='fullName'
                type='text'
              />
              <InputFieldText label={text.ID} name='ID' type='number' />
              <InputFieldText label={text.email} name='email' type='email' />
              <InputFieldText
                label={text.mobileNumber}
                name='mobileNumber'
                type='number'
              />
              <InputFieldText
                label={text.phoneNumber}
                name='phoneNumber'
                type='number'
              />

              <InputFieldText
                label={text.faxNumber}
                name='faxNumber'
                type='number'
              />
            </div>

            <div className='buttonsWrapper'>
              <Button disabled={props.currentFormView === 'userDetails'}>
                {text.previousBtn}
              </Button>

              <Button type='submit'>{text.nextBtn}</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFormView: state.currentFormView,
    userDetails: state.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormView: (value) => dispatch(setFormView(value)),
    saveData: (data, type) => dispatch(saveData(data, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
