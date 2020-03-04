import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class PestControlAPI {
  public static addPestControl(input: any) {
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/PestControl/add-PestControl';
    return Http.axios().post(url, tObj)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPestControlList() {
    return Http.axios().get('/api/PestControl/pestControl-list')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPestControlByIdList(id: number) {
    return Http.axios().get('/api/PestControl/get-PestControl/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deletePestConytrol(id: number) {
    return Http.axios().delete('/api/PestControl/delete-PestControl/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}