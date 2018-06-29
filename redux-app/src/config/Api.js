import axios from 'axios';

export default class Api  {
 
  handleError = error => {
    switch (error.status) {
      case 422:
        return "422 error alert"
      case 404:
        return "404 error alert"
      case 500: 
        return "500 error"
      default:
        break;
    }
  }

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
      return this.handleError(error.response)
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