const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    Project: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true,
    },
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    empdob: { type: String },
    emppass: { type: String },

    regdatetime: { type: Date, default: Date.now }
}, {
    timestamps: true

});

module.exports = mongoose.model('students', studentSchema);