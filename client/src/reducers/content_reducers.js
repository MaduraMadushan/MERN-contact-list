import {ADD_CONTACT, GET_CONTACTS} from './../actions/type';

export default (state = {} , action) => {
    switch(action.type){
        case ADD_CONTACT:
            return {...state, addContact: action.payload};
        case GET_CONTACTS:
            return {...state, contacts: action.payload}
        default:
            return state;
    }
}