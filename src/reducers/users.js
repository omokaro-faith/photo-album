const initialState = {}

 export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_USERS':
   const { users } = action; 
     return {...state, users};
   case 'USER_ERROR':
   const { message } = action; 
      return { ...state, message}
   default:
     return state;
 }
}
