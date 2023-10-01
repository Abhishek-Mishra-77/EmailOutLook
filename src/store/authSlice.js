import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authData: null
    },
    reducers: {
        userSignIn(state, actions) {
            state.authData = actions.payload;
        },
        signOut(state) {
            state.authData = null
        },
    }
})


export const { userSignIn, signOut } = authSlice.actions;


export default authSlice.reducer;