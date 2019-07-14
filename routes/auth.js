const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (rep, res) => {
  res.send('Get logged in user');
});

// @route   POST api/auth
// @desc    Austh user & get token
// @access  Public
router.post('/', (rep, res) => {
  res.send('Log in User');
});

module.exports = router;