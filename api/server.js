import express from 'express';
const app = express();

app.get('/', (req,res) => {
    res.json({
        id: 1,
        name: "Daffa"
    });
});

app.listen(3000, () => {
    console.log("Server is running right now");
});