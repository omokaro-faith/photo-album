const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_ALBUMS':
     const { albums } = action;
     return {...state, albums};
   case 'GET_ALL_ALBUMS':
     const { totalAlbums } = action;
     return {...state, totalAlbums};
   case 'GET_ALBUMS_ERROR':
     const { message } = action; 
     return { ...state, message}
   case 'GET_ALL_ALBUMS_ERROR':
     const { errorMessage } = action; 
     return { ...state, errorMessage}
   default:
     return state;
 }
}
