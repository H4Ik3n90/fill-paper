const express = require('express');
const cors = require('cors');
const router = require('./routes/UserRoute');
const parser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(parser.json());
app.use(parser.urlencoded({extended: true}))
app.use(router);

app.listen(process.env.PORT ,() => {
    console.log("server running at http://localhost:3000");
});