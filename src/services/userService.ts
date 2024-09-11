import api from './api';

export const getUserProfile = () => api.get( '/user/profile' );
export const updateUserProfile = ( data: any ) => api.put( '/user/profile', data );
export const deleteUserProfile = ( userId: string ) => api.delete( `/user/${ userId }` );
