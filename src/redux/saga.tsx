import { all } from 'redux-saga/effects';
import { getAffiliatesSaga } from './affiliates/saga';
import { getSpecialistsSaga } from './specialists/saga';
import { getServiceSaga } from './services/saga';


export default function* rootSaga() {
  yield all([getAffiliatesSaga(), getSpecialistsSaga(), getServiceSaga]);
}
