import { ADD_TEMPERATURE, SET_TEMPERATURE } from '../types/types'

export const diagramReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_TEMPERATURE:
            return payload
        case ADD_TEMPERATURE:
            return payload
        default:
            return state
    }
}
