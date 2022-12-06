import { combineReducers } from 'redux';

const authReducer = (state = {}, action: any): typeof state => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
