const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.get('/notes', (req,res) => {
    fs.readFile('./data/test.json', 'utf-8')
        .then((data) => {
            return res.send(JSON.parse(data));
        });
});

module.exports = router;