import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView6686Saga from '../features/CalendarView6686/redux/sagas';
import EmailAuth6685Saga from '../features/EmailAuth6685/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView6686Saga,
EmailAuth6685Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}