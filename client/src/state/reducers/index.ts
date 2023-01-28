import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import surveysReducer from './surveysReducer/surveysReducer';
import { reducer as reduxForm } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
