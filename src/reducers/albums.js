const initialState = {
  albums:[]
}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_ALBUMS':
   const { albums } = action; 
     return {...state, albums};
   default:
     return state;
 }
}
