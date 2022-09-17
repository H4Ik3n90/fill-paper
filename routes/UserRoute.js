const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req,res) => {
    res.json({id: 1, name: 'daffa'});
});

router.post('/notes', (req,res) => {
    console.log('Hello');

    res.redirect('/notes');
});

module.exports = router;