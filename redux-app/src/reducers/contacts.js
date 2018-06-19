const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';

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
    default: return state;
  }
}
