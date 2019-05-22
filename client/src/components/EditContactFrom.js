import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getContact, updContact} from './../actions/index';
import {withRouter, Link} from 'react-router-dom'

class EditContactFrom extends Component {
    state = { 
        id: '',
        name: '',
        email: '',
        phonenumber: ''
     }

     componentDidMount(){
        const id = this.props.match.params.id
        this.props.getContact(id).then(response => {
            if(response.payload){
                const contacts = this.props.contacts.contact
                this.setState({
                    id: contacts._id,
                    name: contacts.name,
                    email: contacts.email,
                    phonenumber: contacts.phonenumber
                })
            }
        })
     }

     handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updContact(this.state.id, this.state.name, this.state.email, parseInt(this.state.phonenumber)).then(response => {
            if(response.payload){
                this.setState({
                    id: '',
                    name: '',
                    email: '',
                    phonenumber: ''
                })
                setTimeout(() => {
                    this.props.history.push('/')
                },3000)
            }
        })
       
    }

    render() { 
        const {name, email, phonenumber} = this.state;
        const contacts = this.props.contacts.contact;
        console.log('edit',contacts)
        return ( 
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <h1 className="mt-4 text-center">Add Contact</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">name</label>
                                    <input className="form-control" type="text" id="" name="name" value={name} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-control" type="email" id="email" name="email" value={email} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input className="form-control" type="text" id="phone" name="phonenumber" value={phonenumber} onChange={this.handleChange}/>
                                </div>

                                <button className="mt-4 btn btn-warning btn-block"  type="submit">Add Contact</button>
                            </form>
                        <Link to="/" class="btn btn-outline-primary mt-5">&#8592; Back</Link>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})
 
export default connect(mapStateToProps, {getContact, updContact})(withRouter(EditContactFrom));