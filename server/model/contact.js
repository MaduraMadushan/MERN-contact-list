const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error(`Email is invalid`)
            }
        }
    },
    phonenumber:{
        type: Number,
        required: true,
        trim: true,
    }
},{timestamps: true})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact