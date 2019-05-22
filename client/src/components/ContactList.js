import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getContacts, detContact} from './../actions/index';
import {paginate} from './../utils/paginate';
import Pagination from './Pagination';

class ContactList extends Component {
    state = { 
        contacts: [],
        currentPage: 1,
        pageSize: 4,
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

    handleEdit = (id) => {
        this.props.history.push(`/editcontact/${id}`)
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }
    
    render() { 
        const contacts = this.props.contacts.contacts;
        console.log(contacts)
        let count = 0;
        if(contacts){
            count = contacts.length
        }
        const contactList = paginate(contacts, this.state.currentPage, this.state.pageSize)
        return ( 
            <div>
                <table className="table table-striped table-dark">
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
                    {contactList?
                        contactList.map((contact, i) => (
                            <tr key={contact._id}>
                                <th>{i + 1}</th>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phonenumber}</td>
                                <td>
                                <button className="btn btn-primary btn-small mr-2" onClick={() => this.handleEdit(contact._id)}>Edit</button>
                                <button className="btn btn-danger btn-small" onClick={() => this.handleDelete(contact._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        :null}
                    </tbody>
                </table>
               <Pagination itemCount={count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})
 
export default connect(mapStateToProps, {getContacts, detContact})(withRouter(ContactList));