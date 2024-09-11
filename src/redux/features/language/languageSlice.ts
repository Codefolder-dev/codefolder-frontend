import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    languages: [],
    loading: false,
    error: null,
};

const languageSlice = createSlice( {
    name: 'language',
    initialState,
    reducers: {
        // Define language-related actions here
    },
} );

export const { } = languageSlice.actions;
export default languageSlice.reducer;
