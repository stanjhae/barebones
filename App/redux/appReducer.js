import { combineReducers } from 'redux';
import user from './user/user.reducer';
import item from './item/item.reducer';
import trip from './trip/trip.reducer';
import message from './message/message.reducer';
import itemOrder from './itemOrder/itemOrder.reducer';
import appointment from './appointment/appointment.reducer';
import helper from './helper/helper.reducer';

const appReducer = combineReducers({
  user,
  item,
  trip,
  message,
  itemOrder,
  appointment,
  helper,
});

export default appReducer;
