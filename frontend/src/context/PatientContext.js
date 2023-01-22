import { createContext, useReducer } from "react";
import PATIENT_VARIABLES from "./PatientVariables";

export const PatientContext = createContext()

export const patientReducer = (state, action) => {
    switch(action.type) {
        case PATIENT_VARIABLES.SET_PATIENT :
            return {
                patients: action.payload
            }    
        
        case PATIENT_VARIABLES.CREATE_PATIENT :
            return {
                patients: [action.payload, ...state.patients]
            }
        
        case PATIENT_VARIABLES.DELETE_PATIENT :
            return {
                patients: state.patients.filter((p) => p._id !== action.payload._id)
            }
        
        default :
            return state;
    }
}

export const PatientContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(patientReducer, {
        patients: null
    })

    return(
        <PatientContext.Provider value={{...state, dispatch}}>
            { children }
        </PatientContext.Provider>
    )
}