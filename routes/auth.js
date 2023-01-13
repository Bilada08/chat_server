const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/auth.js');

router.get('/health', async (req, res) =>  res.status(200).send("ok"))
router.post('signup', signup);
router.post('login', login);

module.exports = router