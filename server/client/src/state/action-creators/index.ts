import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const fetchUser = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: ActionType.FETCH_USER, payload: res });
  };
};
