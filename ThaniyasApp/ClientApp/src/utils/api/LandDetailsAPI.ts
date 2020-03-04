
import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class LandDetailsAPI {
  public static addLandDetails(input: any) {
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/LandDetails/add-LandDetail';
    return Http.axios().post(url,tObj)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;


  }
  public static getLandDetailsList() {
    return Http.axios().get('/api/LandDetails/get-LandDetails')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getLandDetailByIdList(id: number) {
    return Http.axios().get('/api/LandDetails/get-LandDetail/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteLand(id: number) {
    return Http.axios().delete('/api/LandDetails/delete-LandDetail/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

}