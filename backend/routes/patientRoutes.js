const express = require('express')
const {
    createPatient,
    getAPatient,
    getAllPatients,
    updatePatient,
    deletePatient
} = require('../controllers/patientController')

const router = express.Router()

// GET ALL Patients
router.get('/', getAllPatients)

// GET A Patient
router.get('/:id', getAPatient)

// CREATE Patient
router.post('/', createPatient)

// DELETE a Patient
router.delete('/:id', deletePatient)

// Update a Patient
router.patch('/:id', updatePatient)

module.exports = router