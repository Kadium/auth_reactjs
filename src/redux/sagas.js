import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import ecommerceSaga from './ecommerce/saga';
import itemsSaga from './items/saga';
import chatSagas from './chat/sagas';
import rulesSagas from './shippingcosts/sagas';
import categorySagas from './category/saga';
import orderSagas from './order/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    ecommerceSaga(),
    itemsSaga(),
    chatSagas(),
    rulesSagas(),
    categorySagas(),
    orderSagas()
  ]);
}
