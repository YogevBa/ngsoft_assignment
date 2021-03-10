import React from 'react';
import './finalizedForm.css';
import { text } from '../../textSource';
import { Button } from '@material-ui/core';
import { setFormView } from '../../redux/actions';
import { connect } from 'react-redux';

const FinalizedForm = (props) => {
  const handlePrevious = () => {
    props.setFormView('goodsDetails');
  };

  return (
    <div className='finalizedFormContainer'>
      <section className='userDetailsStyles'>
        <h2 className='groupTitle'>{text.userDetailsTitle}</h2>
        <p>
          {text.supplierName}:
          {props.userDetails ? props.userDetails.supplierName : ''}
        </p>
        <p>
          {text.goodsSource}:{' '}
          {props.userDetails ? props.userDetails.sourceSelect : ''}
        </p>
        <p>
          {text.businessID}:{' '}
          {props.userDetails ? props.userDetails.businessID : ''}
        </p>
        <p>
          {text.originatedCountry}:{' '}
          {props.userDetails ? props.userDetails.sourceSelect : ''}
        </p>
        <div className='seperator'></div>

        <p>
          {text.contactorName}:{' '}
          {props.userDetails ? props.userDetails.fullName : ''}
        </p>
        <p>
          {text.email}:{props.userDetails ? props.userDetails.email : ''}
        </p>
        <p>
          {text.phoneNumber}:{' '}
          {props.userDetails ? props.userDetails.phoneNumber : ''}
        </p>
        <p>
          {text.ID}: {props.userDetails ? props.userDetails.ID : ''}
        </p>
        <p>
          {text.mobileNumber}:{' '}
          {props.userDetails ? props.userDetails.mobileNumber : ''}
        </p>
        <p>
          {text.faxNumber}:{' '}
          {props.userDetails ? props.userDetails.faxNumber : ''}
        </p>
      </section>
      <Button onClick={() => props.setFormView('userDetails')}>
        {text.edit}
      </Button>

      <section className='materialsInfoStyles'>
        <h2 className='groupTitle'>{text.materialsInfo}</h2>
        <p>
          {text.itemName}:{' '}
          {props.goodsDetails ? props.goodsDetails.itemName : ''}
        </p>
        <p>
          {text.itemPorpuse}:{' '}
          {props.goodsDetails ? props.goodsDetails.itemPorpuse : ''}
        </p>
        <p>
          {text.category}:{' '}
          {props.goodsDetails ? props.goodsDetails.category : ''}
        </p>
        <p>
          {text.requiredAmount}:{' '}
          {props.goodsDetails ? props.goodsDetails.requiredAmount : ''}
        </p>
      </section>
      <Button
        onClick={() => props.setFormView('goodsDetails')}
        className='editBtn'
      >
        {text.edit}
      </Button>

      <div className='buttonsWrapper'>
        <Button
          disabled={props.currentFormView === 'userDetails'}
          onClick={() => handlePrevious()}
        >
          {text.previousBtn}
        </Button>

        <Button onClick={() => alert('The End')}>{text.confirm}</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
    goodsDetails: state.goodsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormView: (value) => dispatch(setFormView(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalizedForm);
