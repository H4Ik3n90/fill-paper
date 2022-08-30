const express = require('express');
const router = require('./routes/UserRoute');

const app = express();

app.use(router);

app.listen(3000 ,() => {
    console.log("server running at http://localhost:3000");
});