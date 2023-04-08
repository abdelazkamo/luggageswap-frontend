// src/store/user/actions.ts
import { UserActionTypes, UserAction } from './types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../index';
import api from '../../api';

export const updateName = (name: string): UserAction => ({
  type: UserActionTypes.UPDATE_NAME,
  payload: name,
});

export const updateEmail = (email: string): UserAction => ({
  type: UserActionTypes.UPDATE_EMAIL,
  payload: email,
});

export const updatePassword = (password: string): UserAction => ({
  type: UserActionTypes.UPDATE_PASSWORD,
  payload: password,
});
export const updateContact = (contact: string): UserAction => ({
  type: UserActionTypes.UPDATE_CONTACT,
  payload: contact,
});

export const registerSuccess = (): UserAction => ({
  type: UserActionTypes.REGISTER_SUCCESS,
});

export const registerFailure = (error: string): UserAction => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: error,
});

//..........User registration...............................

export const registerUser = (name: string, email: string, password: string, contact: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch) => {
    api.post('/luggageswap/register', {
      name,
      email,
      password,
      contact,
    })
      .then(() => {
        dispatch({
          type: UserActionTypes.REGISTER_SUCCESS,
        });
      })
      .catch((error) => {
        dispatch({
          type: UserActionTypes.REGISTER_FAILURE,
          payload: error.message,
        });
      });
  };
};
