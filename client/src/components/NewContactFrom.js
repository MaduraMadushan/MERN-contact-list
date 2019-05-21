import React, { Component } from 'react';

class NewContactFrom extends Component {
    state = {
        name: '',
        email: '',
        phonenumber: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    render() { 
        const {name, email, phonenumber} = this.state;
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">name</label>
                <input type="text" id="" name="name" value={name} onChange={this.handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={this.handleChange}/>

                <label htmlFor="phone">name</label>
                <input type="number" id="phone" name="phonenumber" value={phonenumber} onChange={this.handleChange}/>

                <button type="submit">Add Contact</button>
            </form>
         );
    }
}
 
export default NewContactFrom;