import { GET_ONE_PATIENT, EXCTRACT } from '../types/types'

export const onePatientReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_ONE_PATIENT:
            return payload
        case EXCTRACT:
            return payload
        default:
            return state
    }
}
