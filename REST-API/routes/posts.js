const express = require('express')
const router = express.Router();
const {postFunction, getFunction} = require('../controllers/postControllrer')

router.route('/').get(getFunction).post(postFunction)


module.exports = router;