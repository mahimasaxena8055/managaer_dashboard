const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    empdob: { type: String },
    emppass: { type: String },

    regdatetime: { type: Date, default: Date.now }
}, {
    timestamps: true
});

module.exports = schema_mongoose.model('logindetails', loginSchema);