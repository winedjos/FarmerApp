import { put, CallEffect, call } from "redux-saga/effects";
import { STORE_REG_FAILED, STORE_REG_COMPLETED }
  from '../../actions/Registration';

export function* storeRegData(request: any) {
  try {
   // const result = yield call(AccountsAPI.fetchLoginData, request.input);
    //console.log(result.data);
    yield put({
      type: STORE_REG_COMPLETED,
     // payload: result.data.result,
      input: request.input,
      //sessionTimeout: result.data.sessionTimeout
    });

  } catch (e) {
    yield put({ type: STORE_REG_FAILED, payload: e.message });
  }
}