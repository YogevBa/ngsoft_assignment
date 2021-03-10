export const getAppDataReq = (res) => {
  return {
    type: 'appData',
    fetchRes: res,
  };
};

export const setFormView = (res) => {
  return {
    type: 'formView',
    fetchRes: res,
  };
};

export const saveData = (data, type) => {
  if (type === 'userDetails') {
    return {
      type: 'userDetails',
      fetchRes: data,
    };
  } else {
    return {
      type: 'goodsDetails',
      fetchRes: data,
    };
  }
};
