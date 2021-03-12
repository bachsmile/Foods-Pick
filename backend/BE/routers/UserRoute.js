const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const md5 = require('../middlewares/md5')

router.get('/login',  UserController.login)
router.use('/register',md5.hashPass ,UserController.register)

module.exports = router