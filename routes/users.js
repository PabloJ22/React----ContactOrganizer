const express = require('express');
const router = express.Router();

// @route   Post api/users
// @desc    Register a user
// @access  Public 
router.post('/', (rep, res) => {
  res.send('Register a user')
});

module.exports = router;