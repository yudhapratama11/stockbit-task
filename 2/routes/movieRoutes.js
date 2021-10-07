const express = require('express');
const { search, detail } = require('../controllers/movie')
const router = express.Router();

router
    .route('/search')
    .get(search)

router
    .route('/detail')
    .get(detail)

module.exports = router;