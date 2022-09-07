const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const listRouter = require('./routes/List');

dotenv.config();


app.use(express.json({extended:true}));
app.use(cors());

app.listen(process.env.PORT || 5000, () =>{
    console.log('Server Jalan!');
});

app.use('/api', listRouter);


