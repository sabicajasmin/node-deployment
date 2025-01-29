const express = require('express');
const router = express.Router();
const { addForm, getForms, getFormByMobileNumber, getFormById } = require('../controllers/formController');

// Route to add a new form
router.post('/forms', addForm);

// Route to get all forms
router.get('/forms', getForms);

// Route to get a form by ID
router.get('/forms/id/:id', getFormById);

// Route to get a form by mobile number
router.get('/forms/mobile/:mobileNumber', getFormByMobileNumber);

module.exports = router;
