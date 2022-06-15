import { SET_BREETHE, ADD_BREETHE } from '../types/types'

export const breetheDiagramReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_BREETHE:
            return payload
        case ADD_BREETHE:
            return payload
        default:
            return state
    }
}
