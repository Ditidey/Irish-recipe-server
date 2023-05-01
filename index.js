const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());
const chefs = require('./data/chefs.json')
app.get('/', (req, res)=>{
    res.send('Hello from server')
})

app.listen(port, ()=>{
    console.log(`Server is running: ${port}`)
})