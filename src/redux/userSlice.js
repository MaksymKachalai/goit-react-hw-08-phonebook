import { createSlice } from '@reduxjs/toolkit';
import {
  userLogIn,
  userLogOut,
  userSignUp,
} from './ContactsOperations/ContactsOperations';

const initialState = {
  name: null,
  email: null,
  isLoggedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [userSignUp.fulfilled]: (state, action) => {
      const { email, name } = action.payload?.user;
      state.email = email;
      state.name = name;
      state.isLoggedIn = true;
      state.error = null;
    },
    [userSignUp.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [userLogIn.fulfilled]: (state, action) => {
      const { email, name } = action.payload?.user;
      state.email = email;
      state.name = name;
      state.isLoggedIn = true;
      state.error = null;
    },
    [userLogIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [userLogOut.fulfilled]: state => {
      state.email = null;
      state.name = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [userLogOut.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
