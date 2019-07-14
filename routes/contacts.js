const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (rep, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (rep, res) => {
  res.send('Add contacts');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put ('/', (rep, res) => {
  res.send('Update contacts');
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete ('/', (rep, res) => {
  res.send('Delete contacts');
});


module.exports = router;