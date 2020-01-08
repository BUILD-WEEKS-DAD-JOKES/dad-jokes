import { REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED } from '../actions'

const inital = {
    success: false
}

export function registerReducer(state = inital, action) {
    switch (action.type) {
        case REGISTER_USER_START:
            return {
                success: false
            }
        case REGISTER_USER_SUCCESS:
            return {
                success: true
            }
        case REGISTER_USER_FAILED:
            return {
                success: false
            }
        default:
            return state
    }
}