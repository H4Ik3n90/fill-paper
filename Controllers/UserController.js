const fs = require('fs').promises;

const getNotes = ((req,res) => {
    fs.readFile('./data/test.json', 'utf-8')
        .then(data => {
            return res.send(JSON.parse(data));
        });
});

module.exports = {
    getNotes
}