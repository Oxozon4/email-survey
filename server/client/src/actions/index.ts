import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FETCH_USER } from './types';
import { RootState } from '../reducers';

export const fetchUser =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    axios
      .get('/api/current_user')
      .then((res) => dispatch({ type: FETCH_USER, payload: res }));
  };
