const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User'); 
const Contact = require('../models/Contact');


// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
 try {
    const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
    res.json(contacts);
 } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
 }
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