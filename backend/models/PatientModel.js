const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PatientSchema = new Schema({
    NIC: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Patient', PatientSchema)