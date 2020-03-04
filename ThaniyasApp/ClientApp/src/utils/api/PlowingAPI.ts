import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class PlowingAPI {
  public static addPlowing(input: any) {
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Plowing/add-Plowing';
    return Http.axios().post(url, tObj)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPlowinglList() {
    return Http.axios().get('/api/Plowing/plowing-list')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPlowinglByIdList(id: number) {
    return Http.axios().get('/api/Plowing/get-Plowing/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deletePlowing(id: number) {
    return Http.axios().delete('/api/Plowing/delete-Plowing/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}