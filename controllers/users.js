var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const bcrypt = require('bcrypt');

router.post('/register', async (req, res, next) => {
  const { username, password, email } = req.body;
  const hash = bcrypt.hashSync(password, saltRounds);

  const user = await User.create({
    username: username,
    password: hash,
    email: email
  });
  res.json({
    id: user.id,
    username: user.username
  })
});

module.exports = router;
