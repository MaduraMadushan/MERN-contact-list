import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addContact} from './../actions/index';
import {withRouter, Link} from 'react-router-dom'

class NewContactFrom extends Component {
    state = {
        name: '',
        email: '',
        phonenumber: ''
    }

    componentDidMount(){
        
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addContact(this.state.name, this.state.email, parseInt(this.state.phonenumber)).then(response => {
            if(response.payload){
                this.setState({
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
        console.log(this.state)
        return ( 
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <h1 className="mt-4 text-center">Edit Contact</h1>
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

                        <button className="mt-4 btn btn-success btn-block" type="submit">Add Contact</button>
                        </form>
                        <Link to="/" class="btn btn-outline-primary mt-5">&#8592; Back</Link>
                    </div>
                </div>
            </div>
           
         );
    }
}
 
export default connect(null, {addContact})(withRouter(NewContactFrom));