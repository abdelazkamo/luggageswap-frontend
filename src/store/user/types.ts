// src/store/user/types.ts

export interface UserState {
    name: string;
    email: string;
    password: string;
    contact: string;
    error: string | null;
  }
  
  export enum UserActionTypes {
    UPDATE_NAME = 'UPDATE_NAME',
    UPDATE_EMAIL = 'UPDATE_EMAIL',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
    UPDATE_CONTACT = 'UPDATE_CONTACT',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAILURE = 'REGISTER_FAILURE',
  }
  
  interface UpdateNameAction {
    type: UserActionTypes.UPDATE_NAME;
    payload: string;
  }
  
  interface UpdateEmailAction {
    type: UserActionTypes.UPDATE_EMAIL;
    payload: string;
  }
  
  interface UpdatePasswordAction {
    type: UserActionTypes.UPDATE_PASSWORD;
    payload: string;
  }
  interface UpdateContactAction {
    type: UserActionTypes.UPDATE_CONTACT;
    payload: string;
  }
  
  interface RegisterSuccessAction {
    type: UserActionTypes.REGISTER_SUCCESS;
  }
  
  interface RegisterFailureAction {
    type: UserActionTypes.REGISTER_FAILURE;
    payload: string;
  }
  
  export type UserAction =
    | UpdateNameAction
    | UpdateEmailAction
    | UpdatePasswordAction
    | UpdateContactAction
    | RegisterSuccessAction
    | RegisterFailureAction;
  