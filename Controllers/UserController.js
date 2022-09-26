const { sequel, notesPaper } = require('../model/UserModel.js');

const getAllNote = (req,res) => {
    notesPaper.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log("Unable fetching data: ", err);
        });
}

const postNote = (req,res) => {
    notesPaper.create({
        title: req.body.title,
        body: req.body.body 
    })

    res.send('Hello');
};

const updateNote = (req,res) => {
    notesPaper.update(
        {
            title: req.body.title,
            body: req.body.body 
        },
        {
            where: {
                id: req.params.id 
            }
        }
    )
};

const deleteNote = (req,res) => {
    notesPaper.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        console.log("Successfully deleted");

        res.sendStatus(200);
    })
    .catch(err => {
        console.log("Unable to delete field in table: ",err);
    })
}

module.exports = {
    postNote,
    getAllNote,
    updateNote,
    deleteNote
}