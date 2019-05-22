import {ADD_CONTACT, GET_CONTACTS, DET_CONTACT, GET_CONTACT, UPD_CONTACT} from './../actions/type';

export default (state = {} , action) => {
    switch(action.type){
        case ADD_CONTACT:
            return {...state, addContact: action.payload};
        case GET_CONTACTS:
            return {...state, contacts: action.payload};
        case DET_CONTACT:
            return {...state, delContact: action.payload};
        case GET_CONTACT:
            return {...state, contact: action.payload};
        case UPD_CONTACT:
            return {...state, updcontact: action.payload};
        default:
            return state;
    }
}