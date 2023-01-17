import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import { reducer as reduxForm } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
