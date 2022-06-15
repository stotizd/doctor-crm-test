import { SET_USERS } from '../types/types'

export const usersReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USERS:
            return payload
        default:
            return state
    }
}
