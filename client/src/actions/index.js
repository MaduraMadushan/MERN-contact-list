import axios from 'axios';
import {ADD_CONTACT, GET_CONTACTS} from './type';

export const addContact = (name, email, phonenumber) => {
    const request = axios.post(`/api/contact`,{name, email, phonenumber})
                    .then(response => response.data)
    
    return {
        type: ADD_CONTACT,
        payload: request
    }
}

export const getContacts = () => {
    const request = axios.get(`/api/contact`)
                    .then(response => response.data)
    
    return {
        type: GET_CONTACTS,
        payload: request
    }
}