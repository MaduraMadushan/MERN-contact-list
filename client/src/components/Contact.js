import React, { Component } from 'react';
import ContactList from './ContactList';
import {Link} from 'react-router-dom';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mx-5 mt-5">
                    <h1>Contact List</h1>
                    <Link className="btn btn-info" to="/addcontact">Add Contact</Link>
                </div>
                <ContactList />
            </div>
         );
    }
}
 
export default Contact;
