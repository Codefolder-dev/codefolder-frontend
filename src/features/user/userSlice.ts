import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        // Define user-related actions here
    },
} );

export const { } = userSlice.actions;
export default userSlice.reducer;
