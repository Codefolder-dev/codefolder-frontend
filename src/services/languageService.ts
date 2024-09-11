import api from './api';

export const getAllLanguages = () => api.get( '/languages' );
export const addLanguage = ( data: any ) => api.post( '/languages/add', data );
export const removeLanguage = ( data: any ) => api.post( '/languages/remove', data );
export const createLanguage = ( data: any ) => api.post( '/languages/create', data );
export const updateLanguage = ( languageId: string, data: any ) =>
    api.put( `/languages/${ languageId }`, data );
export const deleteLanguage = ( languageId: string ) =>
    api.delete( `/languages/${ languageId }` );
export const addLanguageContent = ( languageId: string, data: any ) =>
    api.post( `/languages/${ languageId }/content`, data );
