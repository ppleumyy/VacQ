const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({path:'./config/config.env'});

const app = express();

app.get('/', (req,res) => {
    //1. res.send('<h1>Hello from express</h1>);
    //2. res.send({name:'Brad});
    //3. res.json({name:'Brad});
    //4. res.sendStatus(400);
    //5. res.status(400).json({success:false});
    res.status(200).json({success:true, data:{id:1}});
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port', PORT));