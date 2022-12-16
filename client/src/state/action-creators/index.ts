import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Token } from 'react-stripe-checkout';

export const fetchUser = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: ActionType.FETCH_USER, payload: res.data });
  };
};

export const handleToken = (token: Token) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: ActionType.FETCH_USER, payload: res.data });
  };
};
