const express = require('express');
const { search } = require('../controllers/movie')
const router = express.Router();

router
    .route('/search')
    .get(search)

module.exports = router;