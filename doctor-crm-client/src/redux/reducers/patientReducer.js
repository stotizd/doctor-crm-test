import { ADD_PATIENT, GET_PATIENTS, EXCTRACT } from '../types/types'

export const patientReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case GET_PATIENTS:
            return payload
        case ADD_PATIENT:
            return [...state, payload]
        default:
            return state
    }
}
