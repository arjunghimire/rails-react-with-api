import actions  from '../actions/contactActions';

const initialState = {
  contacts: [],
  error: null
}

export default function(state = initialState, action){
  switch(action.type) {
    case actions.FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.contacts
      }
    
    case actions.FETCH_CONTACT_FAILED: 
      return {
         ...state,
         error: action.error   
      }
    case actions.DELETE_CONTACT_FAILED:
      return {
        ...state,
        error: action.error
      }
    
    case actions.FETCH_CONTACT_EDIT:
      return {
       	...state,
       	contact: action.contact
      }
    default: return state;
  }
}
