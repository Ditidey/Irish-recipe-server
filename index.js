const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());
 
app.get('/', (req, res)=>{
    res.send('Hello from server')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id
    const chefsFind = chefs.find(chef => chef.id == id)
    res.send(chefsFind)
})
app.listen(port, ()=>{
    console.log(`Server is running: ${port}`)
})