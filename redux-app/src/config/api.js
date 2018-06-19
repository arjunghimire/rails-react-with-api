import axios from 'axios';

// services/api.js
function fetchContact() {
  axios.get('http://localhost:3001/api/v1/contacts')
  .then(response => {
  	return response.data
  })
};

export { fetchContact };