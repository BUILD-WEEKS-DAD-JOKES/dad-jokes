import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILED } from "../actions"

const init = {
    logged_in_user:"",
    isLoggedIn: false,
    err:''
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
                logged_in_user: action.payload,
                isLoggedIn: true
            }
        case LOG_IN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                err:action.payload
            }
        default:
           return state
    }
}