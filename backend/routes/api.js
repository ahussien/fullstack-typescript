const express = require('express');
const router = express.Router();
const githupController = require('../controllers/githupController')

/* GET users listing. */
router.post('/search', githupController.search);

/* GET users listing. */
router.get('/clear-cache', githupController.clearCache);


module.exports = router;

