const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/contact-list', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const Contact = require('./model/contact')

const app = express()
app.use(express.json())

app.post('/api/contact', async(req, res) => {
    try{
        const contact = new Contact(req.body)
        await contact.save()
        res.status(201).send(contact)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('/api/contact', async(req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 100
    let skip = req.query.skip ? parseInt(req.query.skip) : 0
    
    try{
        const contact = await Contact.find({})
                                .limit(limit)
                                .skip(skip)
                                .exec()
        res.send(contact)
    }catch(e){
        res.status(500).send()
    }
})

app.get('/api/contact/:id', async(req, res) => {
    const _id = req.params.id 
    try{
        const contact = await Contact.findById(_id)
        if(!contact) return res.status(404).send()
        res.send(contact)
    }catch(e){
        res.status(500).send()
    }
})

app.patch('/api/contact/:id', async(req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'phonenumber']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation) return res.status(400).send({error: 'Invalid updates!'})
    try{
        const contact = await Contact.findById(_id)
        if(!contact) return res.status(404).send()
        updates.forEach((update) => contact[update] = req.body[update])
        await contact.save()
        res.send(contact)
    }catch(e){
        res.status(400).send(e)
    }
})

app.delete('/api/contact/:id', async(req, res) => {
    const _id = req.params.id
    try{
        const contact = await Contact.findByIdAndDelete(_id)
        if(!contact) return res.status(404).send()
        res.send(contact)
    }catch(e){
        res.status(500).send(e)
    }
})


const port = process.env.PORT || 3002

app.listen(port, () => console.log('server is up on port ' + port))