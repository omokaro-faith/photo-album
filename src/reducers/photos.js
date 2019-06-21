const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_PHOTOS':
   const { photos } = action;
     return {...state, photos};
    case 'GET_ALL_PHOTOS':
      const { totalPhotos } = action;
    return {...state, totalPhotos};
   case 'GET_PHOTOS_ERROR':
   const { message } = action; 
     return { ...state, message };
   case 'GET_ALL_PHOTOS_ERROR':
      const { errorMessage } = action; 
      return { ...state, errorMessage}
   default:
     return state;
 }
}
