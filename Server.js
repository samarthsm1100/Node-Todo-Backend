const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const routes = require('./Routes/ToDoRoute')

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connected to MongoDB`))
.catch((err)=> console.log(err));

app.use(express.json())
app.use(cors());
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Server connected on ${PORT}`);
})