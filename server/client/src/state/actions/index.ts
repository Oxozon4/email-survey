import { ActionType } from '../action-types';

interface UserModel {}

export interface FetchUserAction {
  type: ActionType.FETCH_USER;
  payload: null | {} | false;
}
