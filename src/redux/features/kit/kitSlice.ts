import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    kits: [],
    loading: false,
    error: null,
};

const kitSlice = createSlice( {
    name: 'kit',
    initialState,
    reducers: {
        // Define kit-related actions here
    },
} );

export const { } = kitSlice.actions;
export default kitSlice.reducer;
