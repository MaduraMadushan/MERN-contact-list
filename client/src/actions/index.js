import axios from 'axios';
import {ADD_CONTACT, GET_CONTACTS, DET_CONTACT, GET_CONTACT, UPD_CONTACT} from './type';

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

export const detContact = (id) => {
    const request = axios.delete(`/api/contact/${id}`)
                    .then(response => response.data)
    
    return {
        type: DET_CONTACT,
        payload: request
    }
}

export const getContact = (id) => {
    const request = axios.get(`/api/contact/${id}`)
                    .then(response => response.data)
    
    return {
        type: GET_CONTACT,
        payload: request
    }
}

export const updContact = (id, name, email, phonenumber) => {
    const request = axios.patch(`/api/contact/${id}`,{name, email, phonenumber})
    .then(response => response.data)

    return {
        type: UPD_CONTACT,
        payload: request
    }
}
