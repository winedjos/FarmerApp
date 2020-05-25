import { HttpLocal, Http } from "../Http";
import { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from 'axios';
import { HTTP,  } from '@ionic-native/http/ngx';

export class LoginAPI {
  //static http: HTTP;
  //private httpionic: HTTP
  //constructor(private http: HTTP) {}

  //const axios = require('axios');
  public static fetchLoginData(input: any) {
    var obj = JSON.stringify(input);
    alert("btn clicked api call");
    //For mobile app
    var url = "/api/Accounts";
    //For mobile app
    //var url = "/Login/GetUserbyLogin";
    //return HttpLocal.axios().post(url, obj, { headers: { 'Content-Type': 'application/json' } })
    //  .catch((e) => {
    //    return e.response;
    //  }) as AxiosPromise<any>;
    //return axios.post('/sessions/create', data);
    //For mobile app
    //var url = "/Login/GetUserbyLogin";
    //return HttpLocal.axios().post(url, obj, { headers: { 'Content-Type': 'application/json' } })
    //  .catch((e) => {
    //    return e.response;
    //  }) as AxiosPromise<any>;
    //return axios.post('/sessions/create', data);
  //   try{
  //   var headers= {
  //           'Content-Type': 'application/json',
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Credentials": "true",
  //           "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  //           "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  //         };

  //         alert("api try");
  //  return Http.axios().post('api/Accounts', obj, { headers: headers })
  //    .then(data => {
  //      alert("logged success");
  //      console.log(data.status);
  //      console.log(data.data); // data received by server
  //      console.log(data.headers);
  //    })
  //    .catch(error => {
  //      alert("error in process");
  //      console.log(error);
  //      console.log(error.status);
  //      console.log(error.error); // error message as string
  //      console.log(error.headers);
  //    }) as unknown as  AxiosPromise<any>;
  //   }
  //   catch(e){

  //     console.log(e);
  //     alert(e.message);
  //     return null;
  //   }
    return Http.axios().post("api/Accounts", obj,
      {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        }
      })
      .then(response => {
        return response;
      }).catch((e: any) => {
        console.log("Error in post" + e);
        return e.response;
      }) as AxiosPromise<any>;

    //return axios.post("http://localhost:56492/api/Accounts", { obj })
    //  .then(res => {
    //    console.log(res);
    //    console.log(res.data);
    //  })
    //  .catch((e: any) => {
    //    console.log("Error in post" + e);
    //    return e.response;
    //  }) as AxiosPromise<any>;
  }

  public static fetchLogOut() {
    return HttpLocal.axios().get('/Login/SignOutbyClient')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static fetchCheckLoggedUser(userName: string) {
    return HttpLocal.axios().get('/Login/CheckIsCurrentUserValid?userName=' + userName)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }
}