import { ADD_PRESURE, SET_PRESURE } from '../types/types'

export const presureDiagramReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_PRESURE:
            return payload
        case ADD_PRESURE:
            return payload
        default:
            return state
    }
}
