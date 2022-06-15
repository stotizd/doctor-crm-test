import { SET_DESTINATION, ADD_DESTINATION } from '../types/types'

export const destinationReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_DESTINATION:
            return payload
        case ADD_DESTINATION:
            return payload
        default:
            return state
    }
}
