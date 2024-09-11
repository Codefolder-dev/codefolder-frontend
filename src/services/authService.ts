import api from './api';  // Central Axios instance

export const registerUser = ( data: { email: string, password: string } ) =>
    api.post( '/auth/register', data );

export const loginUser = ( data: { email: string, password: string } ) =>
    api.post( '/auth/login', data );

export const refreshToken = () =>
    api.post( '/auth/token/refresh' );

export const logoutUser = () =>
    api.post( '/logout' );
