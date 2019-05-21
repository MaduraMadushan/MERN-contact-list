import React, { Component } from 'react';
import ContactList from './ContactList';
import {Link} from 'react-router-dom';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <h1>Contact List</h1>
                    <Link to="/addcontact">Add Contact</Link>
                </div>
                <ContactList />
            </div>
         );
    }
}
 
export default Contact;
