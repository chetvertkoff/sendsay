import {combineReducers} from 'redux';
import consoleReqHistory from './ConsoleReqHistory';
import consoleRequest from './consoleRequest';

export default combineReducers({
  consoleReqHistory,
  consoleRequest
})