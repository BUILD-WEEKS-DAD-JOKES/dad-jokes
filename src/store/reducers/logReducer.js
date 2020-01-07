import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILED } from "../actions"

const init = {
    user_id: 1,
    isLoggedIn: false
}

export function logReducer(state = init, action) {
    switch (action.type) {
        case LOG_IN_START:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOG_IN_SUCCESS:
            return {
                user_id: action.payload,
                isLoggedIn: true
            }
        case LOG_IN_FAILED:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}