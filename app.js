const express = require('express');
const cors = require('cors');
const router = require('./routes/UserRoute');

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);
app.use(router);

app.listen(5000 ,() => {
    console.log("server running at http://localhost:5000");
});