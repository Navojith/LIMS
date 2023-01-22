import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export const usePatientsContext = () => {
    const context = useContext(PatientContext)

    if (!context) {
        throw Error("usePatientsContext must be used inside a WorkoutContextProvider")
    }

    return context;
}