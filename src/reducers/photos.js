const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_PHOTOS':
   const { photos } = action;
     return {...state, photos};
   case 'PHOTO_ERROR':
   const { message } = action; 
     return { ...state, message}
   default:
     return state;
 }
}
