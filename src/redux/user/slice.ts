/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, SignInUserPayload } from './types';

const initialState: UserState = {
  isSignIn: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: (state: UserState, { payload }: PayloadAction<SignInUserPayload>) => {
      const { permission, token, name, surname, serverTime, language, age, ageCategory, isParticipating } = payload;

      state.isSignIn = true;
      state.permission = permission;
      state.token = token;
      state.name = name;
      state.surname = surname;
      state.serverTime = serverTime;
      state.clientTime = Date.now();
      state.language = language;
      state.age = age;
      state.ageCategory = ageCategory;
      state.isParticipating = isParticipating;

      sessionStorage.setItem(`token`, token);
    },
    signInError: (state: UserState) => {
      state.isSignIn = false;
      sessionStorage.removeItem(`token`);
    },
    signOutSuccess: (state: UserState) => {
      state.isSignIn = false;
      sessionStorage.removeItem(`token`);
    },
  },
});

export const sliceActions = slice.actions;

export default slice.reducer;