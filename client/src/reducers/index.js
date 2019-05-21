import {combineReducers} from 'redux';
import contacts from './content_reducers';

const rootReducer = combineReducers({
    contacts
})

export default rootReducer;