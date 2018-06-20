const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
const  FETCH_CONTACT_EDIT = 'FETCH_CONTACT_EDIT'

const initialState = {
	contacts: []
}


export default function(state = initialState, action){
  switch(action.type) {
    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.contacts
      }

     case FETCH_CONTACT_EDIT:
       return {
       	...state,
       	contact: action.contact
       }
    default: return state;
  }
}
