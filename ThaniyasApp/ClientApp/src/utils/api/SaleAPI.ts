import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class SaleAPI {
  public static addSale(input: any) {
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Sale/add-Sale';
    return Http.axios().post(url, tObj)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getSaleList() {
    return Http.axios().get('/api/Sale/sale-list')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getSaleByIdList(id: number) {
    return Http.axios().get('/api/Sale/get-Sale/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteSale(id: number) {
    return Http.axios().delete('/api/Sale/delete-Sale/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}