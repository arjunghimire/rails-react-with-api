import axios from 'axios';

export default class Api  {

  axiosFunction = () => {
    return axios.create({
      baseURL: "http://localhost:3001/api/v1/",
      responseType: 'json',
      headers: {
       "Authorization" : "Bearer" //+ this.state.access_token
      }
    });
  }
  post = (url,data) => {
    return this.axiosFunction().post(url,data).then(response => {
      return response;
    }).catch(error => {
      return error.response;
    });;
  }

  get = (url,data) => {
    return this.axiosFunction().get(url,data);
  }

  put = (url,data) => {
    return this.axiosFunction().put(url,data);
  }

  delete = (url,data) => {
    return this.axiosFunction().delete(url,data);
  }

}




  // withCredentials: true,
