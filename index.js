const express = require('express');
const app = express()
const dotenv = require('dotenv').config()
const { connection } = require('./Config/connect');
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('Welcome homepage')
})

app.listen(5001,async()=>{
    console.log(`Listening on http://localhost:${5001}`)
    try {
        await connection
        console.log('Connected to db')
    } catch (error) {
        console.log(`Error: ${error}`)
}
})