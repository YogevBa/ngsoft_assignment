import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
  appData: [],
  currentFormView: 'goodsDetails',
  userDetails: null,
  goodsDetails: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'appData':
      return {
        ...state,
        appData: action.fetchRes,
      };
    case 'formView':
      return {
        ...state,
        currentFormView: action.fetchRes,
      };
    case 'userDetails':
      return {
        ...state,
        userDetails: action.fetchRes,
      };
    case 'goodsDetails':
      return {
        ...state,
        goodsDetails: action.fetchRes,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
