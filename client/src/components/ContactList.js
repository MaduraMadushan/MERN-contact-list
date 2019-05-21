import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getContacts} from './../actions/index';

class ContactList extends Component {
    state = {  }
    componentDidMount(){
        this.props.getContacts()
    }
    render() { 
        const contacts = this.props.contacts.contacts;
        console.log(contacts)
        return ( 
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {contacts?
                     contacts.map((contact, i) => (
                        <tr key={contact._id}>
                            <th>{i}</th>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phonenumber}</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                    ))
                    :null}
                </tbody>
            </table>
         );
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})
 
export default connect(mapStateToProps, {getContacts})(ContactList);