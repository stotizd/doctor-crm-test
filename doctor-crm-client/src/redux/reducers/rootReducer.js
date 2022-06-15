import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { breetheDiagramReducer } from './breetheDiagramReducer'
import { destinationReducer } from './destinationReducer'
import { diagramReducer } from './diagramReducer'
import { onePatientReducer } from './onePatientReducer'
import { patientReducer } from './patientReducer'
import { presureDiagramReducer } from './presureDiagramReducer'
import { pulseDiagramReducer } from './pulseDiagramReducer'
import { userReducer } from './userReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    // reducers
    isAuth: authReducer,
    users: usersReducer,
    user: userReducer,
    patients: patientReducer,
    one_patient: onePatientReducer,
    destination: destinationReducer,
    temperatureDiagram: diagramReducer,
    presureDiagram: presureDiagramReducer,
    pulseDiagram: pulseDiagramReducer,
    breetheDiagram: breetheDiagramReducer,
    
})
