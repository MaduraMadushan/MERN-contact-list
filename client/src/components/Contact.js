import React, { Component } from 'react';
import NewContactFrom from './NewContactFrom';
import ContactList from './ContactList';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Contact List</h1>
                <NewContactFrom />
                <ContactList />
            </div>
         );
    }
}
 
export default Contact;
