import {
  CREATE_CONTACT_REQUEST,
  FETCH_CONTACT_REQUEST,
  DELETE_CONTACT_REQUEST,
  EDIT_CONTACT_REQUEST
} from './types';




export const fetchContactRequest = () => ({
  type: FETCH_CONTACT_REQUEST
})

export function onPostSubmit(contact) {
  return {
    type: CREATE_CONTACT_REQUEST,
    contact
  }
}

export function onDeleteContact(id){
  return{
    type: DELETE_CONTACT_REQUEST,
    id
  }
}

export function onEditContact(id){
   return{
    type: EDIT_CONTACT_REQUEST,
    id
  } 
}
// function onPost(contact){
//   return fetch('http://127.0.0.1:3001/api/v1/contacts/', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(contact)
//     });
// }


// function  receiveContact(json){
//     return {
//         type: FETCH_CONTACT,
//         contacts: json
//     }
// }



// export function fetchContact(){
//     return function(dispatch) {
//         return getContactsJson()
//         .then(json => dispatch(receiveContact(json)))
//     }
// }
