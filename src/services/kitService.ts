import api from './api';

export const createKit = ( data: any ) => api.post( '/kits/create', data );
export const getKitById = ( id: string ) => api.get( `/kits/${ id }` );
export const getAllKits = () => api.get( '/kits' );
export const updateKit = ( id: string, data: any ) => api.put( `/kits/${ id }`, data );
export const deleteKit = ( id: string ) => api.delete( `/kits/${ id }` );
export const addItemToKit = ( id: string, data: any ) => api.post( `/kits/${ id }/items`, data );
