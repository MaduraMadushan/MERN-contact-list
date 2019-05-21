import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getContacts, detContact} from './../actions/index';

class ContactList extends Component {
    state = { 
        contacts: []
     }
    componentDidMount(){
        this.setState({contacts:this.props.getContacts()})
    }

    handleDelete = (id) => {
        this.props.detContact(id).then(response => {
            if(response.payload){
                this.setState({contacts: this.props.getContacts()})
            }
        })
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
                            <td><button>Edit</button><button onClick={() => this.handleDelete(contact._id)}>Delete</button></td>
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
 
export default connect(mapStateToProps, {getContacts, detContact})(ContactList);