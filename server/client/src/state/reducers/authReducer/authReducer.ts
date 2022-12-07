import { ActionType } from '../../action-types';
import { FetchUserAction } from '../../actions';

interface UserModel {}

export const authReducer = (
  state = null,
  action: FetchUserAction
): null | UserModel | false => {
  console.log(action);
  switch (action.type) {
    case ActionType.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
