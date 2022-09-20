const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.get('/notes', (req,res) => {
    fs.readFile('./data/test.json', 'utf-8')
        .then((data) => {
            return res.send(JSON.parse(data));
        });
});

router.post('/notes/coba', (req,res) => {
    var data;
    
    async function writeNotes() {
        let readData = await fs.readFile('./data/test.json', 'utf-8');
        let notesJSON = JSON.parse(readData).notes;

        notesJSON.push({id: notesJSON.length+1, title: req.body.title, note: req.body.note});

        let resultJSON = {notes: notesJSON};

        data = resultJSON;
    }

    writeNotes();
    console.log(data);

    return res.sendStatus(200)
});

module.exports = router;