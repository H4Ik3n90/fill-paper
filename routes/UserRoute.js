const express = require('express');
const router = express.Router();
const { postNote, getAllNote } = require('../controllers/UserController.js');

router.get('/notes', getAllNote)

router.post('/notes/add', postNote);

router.delete('/notes/', )

module.exports = router;