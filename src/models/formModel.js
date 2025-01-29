const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    technicianName: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending',
    },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
