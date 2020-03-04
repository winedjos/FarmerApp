import axios, { AxiosInstance } from "axios";

let API_URL = "http://localhost:56492/";
if (process.env.REACT_APP_API_URL) {

  API_URL = process.env.REACT_APP_API_URL;
}


export class Http {
  public static axios(): AxiosInstance {
    return axios.create({
      baseURL: API_URL
    });
  }
}
