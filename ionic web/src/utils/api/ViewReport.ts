 
import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class ViewReportAPI { 

  public static getViewReportLists(id : number) {
    return Http.axios().get('/api/ViewReport/get-viewreports?id=' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }
}