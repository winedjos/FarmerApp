import axios, { AxiosInstance } from "axios";
import { HTTP,  } from '@ionic-native/http/ngx';

let API_URL = "http://18.217.148.61/";
//let API_URL = "http://localhost:56492/";
let Local_URL = "http://localhost:56492/";

if (process.env.REACT_APP_Local_URL) {
  Local_URL = process.env.REACT_APP_Local_URL;
}



export class Http {
  public static axios(): AxiosInstance {
    return axios.create({
      baseURL: API_URL
    });
  }
}

export class HttpLocal {
  public static axios(): AxiosInstance {
    return axios.create({
      baseURL: API_URL
    });
  }
}
