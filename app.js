const express = require("express");
const mongoose = require("mongoose");
const dataRouter = require("./routes/dataRoutes");
const dotenv = require('dotenv');
const path = require('path')

const port = process.env.PORT || 5000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config()
mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{

    console.log('Database is connected');
    })
    .catch(err => {
        console.log(err.message);
});

app.use(dataRouter);
app.listen(port, ()=>{
    console.log('Server is running on port %s', port);
})