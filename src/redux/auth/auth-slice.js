import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(authOperations.register.fulfilled, (state, {payload}) =>{
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    })

    .addCase(authOperations.logIn.fulfilled, (state, {payload}) =>{
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    })

    .addCase(authOperations.logOut.fulfilled, (state, {payload}) =>{
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    })

    .addCase(authOperations.fetchCurrentUser.pending,(state) =>{
      state.isFetchingCurrentUser = true;
    })
   .addCase(authOperations.fetchCurrentUser.fulfilled, (state, {payload}) =>{
 
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    })
    .addCase(authOperations.fetchCurrentUser.rejected, (state) =>{
      state.isFetchingCurrentUser = false;
    })
  },
});

export const authReducer = authSlise.reducer;
export default authSlise.reducer;