const express = require('express');
const router = express.Router();
const { register, getUser, getAllNote, postNote, updateNote, deleteNote } = require('../controllers/UserController.js');

router.get('/signup', getUser);

router.post('/signup', register)

router.get('/notes', getAllNote);

router.post('/notes', postNote);

router.put('/notes/:id', updateNote);

router.delete('/notes/:id', deleteNote);

module.exports = router;