const express = require('express')
const mongoose = require('mongoose');
require("dotenv/config");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/posts',postRoute);
app.get('/', (req, res) => res.send('Hello World!'));



mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log('connected'))
.catch(e=>console.log(e));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))