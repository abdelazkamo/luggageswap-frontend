// src/store/user/reducer.ts

import { UserState, UserAction, UserActionTypes } from './types';

const initialState: UserState = {
  name: '',
  email: '',
  password: '',
  contact: '',
  error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UserActionTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case UserActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case UserActionTypes.UPDATE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case UserActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
