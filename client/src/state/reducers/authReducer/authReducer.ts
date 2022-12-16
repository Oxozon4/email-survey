import { ActionType } from '../../action-types';
import { FetchUserAction } from '../../actions';

interface UserModel {
  credits?: string;
  googleID?: string;
}

const reducer = (
  state = null,
  action: FetchUserAction
): null | UserModel | false => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default reducer;
