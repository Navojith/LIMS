import { useEffect } from "react";
import { usePatientsContext } from "../hooks/usePatients";
import PATIENT_VARIABLES from "../context/PatientVariables";

// components


const Patient = () => {


    const { patients, dispatcher } = usePatientsContext()

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
        
            if(response.ok){
                dispatcher({type: PATIENT_VARIABLES.SET_PATIENT, payload:json })
            }
        }

        fetchPatients()
    }, [])

    return(
        <div className="container">
            {patients && patients.map((patient) => {
                <PatientDetails key={patient._id} patient={patient} />
            })}
        </div>
    )
}


export default Patient;