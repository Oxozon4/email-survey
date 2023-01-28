import { ActionType } from '../../action-types';
// import {  } from '../../actions';

const surveysReducer = (state = null, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};

export default surveysReducer;
