import { SET_PULSE, ADD_PULSE } from '../types/types'

export const pulseDiagramReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_PULSE:
            return payload
        case ADD_PULSE:
            return payload
        default:
            return state
    }
}
