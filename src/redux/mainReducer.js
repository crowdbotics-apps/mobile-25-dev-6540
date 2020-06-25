import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6686Reducer from '../features/CalendarView6686/redux/reducers';
import EmailAuth6685Reducer from '../features/EmailAuth6685/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6686: CalendarView6686Reducer,
EmailAuth6685: EmailAuth6685Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});