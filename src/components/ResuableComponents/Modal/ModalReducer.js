import React from 'react';

const reducer = (state, action) => {
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      canClose: true,
      isOpen: false,
      template: null,
      title: '',
    };
  }
  if (action.type === 'OPEN_MODAL') {
    if (!React.isValidElement(action.payload.template))
      throw new Error(`${action.payload.template} is not valid React element`);
    return { ...state, isOpen: true, ...action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
