const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_USERS':
   const { users } = action; 
     return {...state, users};
   default:
     return state;
 }
}
