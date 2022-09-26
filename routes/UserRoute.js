const express = require('express');
const router = express.Router();
const { postNote, getAllNote, updateNote, deleteNote } = require('../controllers/UserController.js');

router.get('/notes', getAllNote);

router.post('/notes', postNote);

router.put('/notes/:id', updateNote);

router.delete('/notes/:id', deleteNote);

module.exports = router;