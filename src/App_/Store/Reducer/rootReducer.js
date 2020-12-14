import {combineReducers} from 'redux';
import consoleReqHistory from './ConsoleReqHistory';
import consoleRequest from './consoleRequest';
import consoleModal from './consoleModal';

export default combineReducers({
  consoleReqHistory,
  consoleRequest,
  consoleModal,
})