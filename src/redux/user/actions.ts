import { AppThunk } from '../store';
import { signIn, signOut } from './api';
import { SignInUserPayload, sliceActions } from './slice';

const { signInSuccess, signInError, signOutSuccess } = sliceActions;

export const SignInUser = (): AppThunk => async (dispatch) => {
  try {
    const {
      data: {
        result: { user_data: userData },
      },
    } = await signIn();

    const { permissions } = userData;

    const payload: SignInUserPayload = {
      permissions,
    };

    dispatch(signInSuccess(payload));
  } catch (error) {
    dispatch(signInError());
  }
};

export const signOutUser = (): AppThunk => async (dispatch) => {
  try {
    await signOut();
  } finally {
    localStorage.removeItem('token');
    dispatch(signOutSuccess());
  }
};
