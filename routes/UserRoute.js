const express = require('express');
const router = express.Router();

const {
    getNotes
} = require('../Controllers/UserController.js');

router.get('/notes', getNotes);

module.exports = router;