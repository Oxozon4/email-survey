import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Token } from 'react-stripe-checkout';
import { History } from 'history';

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

export const submitSurvey = ({
  values,
  history,
}: {
  values: any;
  history: History;
}) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: ActionType.FETCH_USER, payload: res.data });
  };
};

export const fetchSurveys = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get('/api/surveys');
    dispatch({ type: ActionType.FETCH_SURVEYS, payload: res.data });
  };
};
