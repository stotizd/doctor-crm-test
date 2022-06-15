import { SET_AUTH } from '../types/types'

export const authReducer = (state = false, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_AUTH:
            return payload
        default:
            return state
    }
}
