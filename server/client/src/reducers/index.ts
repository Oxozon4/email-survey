import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
