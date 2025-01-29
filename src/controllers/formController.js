const Form = require('../models/Form');
const logger = require('../utils/logger'); // Assuming you have a logger utility

// Add a new form
const addForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    logger.info('Weather data submitted to the database', { data: req.body });
    res.status(201).json(form);
  } catch (error) {
    logger.error('Error submitting weather data to the database', { error: error.message });
    res.status(400).json({ message: error.message });
  }
};

// Get all forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get forms by mobile number
const getFormByMobileNumber = async (req, res) => {
  try {
    const forms = await Form.find({ mobileNumber: req.params.mobileNumber });
    if (forms.length === 0) {
      return res.status(404).json({ message: 'Forms not found' });
    }
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a form by ID
const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addForm,
  getForms,
  getFormByMobileNumber,
  getFormById,
};
