import React, { useEffect } from 'react';
import './mainScreen.css';
import UserDetails from '../../components/userDetails/UserDetails';
import GoodsDetails from '../../components/goodsDetails/GoodsDetails';
import FinalizedForm from '../../components/finalizedForm/FinalizedForm';
import { getDbData } from '../../api';
import { connect } from 'react-redux';
import { getAppDataReq } from '../../redux/actions';
import { text } from '../../textSource';

const MainScreen = (props) => {
  useEffect(() => {
    getDbData().then((data) => props.getAppData(data));
  }, []);
  const conditionalFormView = (currentForm) => {
    if (currentForm === 'userDetails') {
      return <UserDetails origins={props.appData.origins} />;
    } else if (currentForm === 'goodsDetails') {
      return <GoodsDetails categories={props.appData.categories} />;
    } else {
      return <FinalizedForm />;
    }
  };

  const { currentFormView } = props;

  return (
    <div className='mainScreenContainer'>
      <h1 className='wizardTitle'>{text.formTitle}</h1>

      {conditionalFormView(currentFormView)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appData: state.appData,
    currentFormView: state.currentFormView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAppData: (data) => dispatch(getAppDataReq(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
