import axios from 'axios';

import {
  FETCH_CONTACT_REQUEST
} from './types';


export const fetchContactRequest = () => ({
  type: FETCH_CONTACT_REQUEST
})

// export function onPostSubmit(contact) {
//   return function(dispatch) {
//       return onPost(contact)
//   }
// }
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

// function getContactsJson(){
//     return  axios.get('http://127.0.0.1:3001/api/v1/contacts/')
//         .then(response => response.data.data)
// }

// export function fetchContact(){
//     return function(dispatch) {
//         return getContactsJson()
//         .then(json => dispatch(receiveContact(json)))
//     }
// }
