const Patient = require('../models/PatientModel')
const mongoose = require('mongoose')

// GET ALL patients
const getAllPatients = async (req, res) => {
    const patients = await Patient.find({}).sort({createdAt: -1})
    res.status(200).json(patients)
}

// GET A single patient
const getAPatient = async (req, res) => {
    
    const { id } = req.params       // GET id from url

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

// CREATE a new Patient 
const createPatient = async (req, res) => {
    const { NIC, name, phoneNumber, dateOfBirth, email } = req.body

    let emptyFields = []

    if(!NIC) {
        emptyFields.push('NIC')
    }
    if(!name) {
        emptyFields.push('name')
    }
    if(!phoneNumber) {
        emptyFields.push('phoneNumber')
    }
    if(!dateOfBirth) {
        emptyFields.push('dateOfBirth')
    }
    if(!email) {
        emptyFields.push('email')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields })
    }

    // Add doc to db
    try {
        const patient = await Patient.create({NIC, name, phoneNumber, dateOfBirth, email})
        res.status(200).json(patient)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a Patient
const deletePatient = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Patient'})
    }

    const patient = await Patient.findByIdAndDelete({_id: id})      // Delete

    if(!patient) {
        return res.status(400).json({error: 'No such Patient'})
    }

    res.status(200).json(patient)
}

// UPDATE a patient
const updatePatient = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Patient'})
    }

    const patient = await Patient.findByIdAndUpdate({_id: id}, { ...req.body })         // Update

    if(!patient) {
        return res.status(400).json({error: 'No such Patient'})
    }

    res.status(200).json(patient)
}


// Exports
module.exports = {
    getAPatient,
    getAllPatients,
    deletePatient,
    createPatient,
    updatePatient
}