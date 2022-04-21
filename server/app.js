const express = require('express')
const app = express()
app.get('/', (req, res)=>{
    res.status(200).send('Hi!!')
})
const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server listen to port ${PORT}`)
})