const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_ALBUMS':
   const { albums } = action;
     return {...state, albums};
   case 'ALBUMS_ERROR':
   const { message } = action; 
      return { ...state, message}
   default:
     return state;
 }
}
