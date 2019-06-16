const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_PHOTOS':
   const { photos } = action;
     return {...state, photos};
   default:
     return state;
 }
}
