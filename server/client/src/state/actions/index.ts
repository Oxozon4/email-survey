import { ActionType } from '../action-types';

interface UserModel {
  googleID: string;
  credits: string;
}

export interface FetchUserAction {
  type: ActionType.FETCH_USER;
  payload: UserModel;
}
