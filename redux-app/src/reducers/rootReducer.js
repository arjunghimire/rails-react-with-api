import { combineReducers } from 'redux';
import contactReducer from './contacts';

export default combineReducers({
    contacts: contactReducer
});
