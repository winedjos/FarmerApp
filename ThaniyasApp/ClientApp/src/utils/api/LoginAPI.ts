import { HttpLocal } from "../Http";
import { AxiosPromise, AxiosRequestConfig } from "axios";

export class LoginAPI {

  //const axios = require('axios');
  public static fetchLoginData(input: any) {
    var obj = JSON.stringify(input);
    return HttpLocal.axios().post('/Login/GetUserbyLogin', obj, { headers: { 'Content-Type': 'application/json' } })
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static fetchLogOut() {
    return HttpLocal.axios().get('/Login/SignOutbyClient')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }
}