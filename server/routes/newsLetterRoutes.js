const express = require('express');
const { subscribe } = require('../controllers/newsLetterController');

const router = express.Router();

router.post('/', subscribe);

module.exports = router;
