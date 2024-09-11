import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../services/authService';

// Thunk for login
export const login = createAsyncThunk( 'auth/login', async ( data: { email: string, password: string }, { rejectWithValue } ) => {
    try {
        const response = await loginUser( data );
        localStorage.setItem( 'token', response.data.token );
        return response.data;
    } catch ( error:any ) {
        return rejectWithValue( error.response.data );
    }
} );

// Thunk for registration
export const register = createAsyncThunk( 'auth/register', async ( data: { email: string, password: string }, { rejectWithValue } ) => {
    try {
        const response = await registerUser( data );
        localStorage.setItem( 'token', response.data.token );
        return response.data;
    } catch ( error:any ) {
        return rejectWithValue( error.response.data );
    }
} );

const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: ( state ) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem( 'token' );
        },
    },
    extraReducers: ( builder ) => {
        // Handle login
        builder.addCase( login.pending, ( state ) => {
            state.loading = true;
        } );
        builder.addCase( login.fulfilled, ( state, action ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
        } );
        builder.addCase( login.rejected, ( state, action ) => {
            state.error = action.payload;
            state.loading = false;
        } );

        // Handle registration
        builder.addCase( register.pending, ( state ) => {
            state.loading = true;
        } );
        builder.addCase( register.fulfilled, ( state, action ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
        } );
        builder.addCase( register.rejected, ( state, action ) => {
            state.error = action.payload;
            state.loading = false;
        } );
    },
} );

export const { logout } = authSlice.actions;
export default authSlice.reducer;
