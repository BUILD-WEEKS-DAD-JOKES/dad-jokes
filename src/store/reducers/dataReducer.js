import {
    DATA_FETCH_START,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_FAILED,
    JOKE_DEL_START,
    JOKE_DEL_SUCCESS,
    JOKE_DEL_FAILED,
    JOKE_ADD_START,
    JOKE_ADD_SUCCESS,
    JOKE_ADD_FAILED,
    FETCH_SAVED_JOKE_SUCCESS,
    FETCH_SAVED_JOKE_START,
    FETCH_SAVED_JOKE_FAILED,
    SAVE_JOKE_START,
    SAVE_JOKE_SUCCESS,
    SAVE_JOKE_FAILED,
    EDIT_JOKE_START,
    EDIT_JOKE_FAILED,
    EDIT_JOKE_SUCCESS
} from '../actions'

const inital = {
    jokes: [],
    saved_jokes: [],
    isFetching: false,
    isFetchingSaved: false,
    isSaving: false,
    isDeleting: false,
    isAdding: false,
    isUpdating: false,
    err: '',
    save_err:''
}

export const dataReducer = (state = inital, action) => {
    switch (action.type) {
        //#region FETCH
        case DATA_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                isFetching: false
            }
        case DATA_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                err: action.payload

            }
        //#endregion
        //#region DELETE
        case JOKE_DEL_START:
            return {
                ...state,
                isDeleting: true
            }
        case JOKE_DEL_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                jokes: state.jokes.filter(id => id !== action.payload)
            }

        case JOKE_DEL_FAILED:
            return {
                ...state,
                isDeleting: false
            }
        //#endregion
        //#region ADD
        case JOKE_ADD_START:
            return {
                ...state,
                isAdding: true
            }
        case JOKE_ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                jokes: [...state.jokes, action.payload]
            }

        case JOKE_ADD_FAILED:
            return {
                ...state,
                isAdding: false
            }
        //#endregion
        //#region SAVED
        case FETCH_SAVED_JOKE_START:
            return {
                ...state,
                isFetchingSaved: true
            }
        case FETCH_SAVED_JOKE_SUCCESS:

            return {
                ...state,
                isFetchingSaved: false,
                saved_jokes: action.payload
            }
        case FETCH_SAVED_JOKE_FAILED:
            return {
                ...state,
                isFetchingSaved: false,
                err: action.payload
            }
        case SAVE_JOKE_START:
            return {
                ...state,
                isSaving: true
            }
        case SAVE_JOKE_SUCCESS:
            return {
                ...state,
                isSaving: false,
                saved_jokes:[...state.saved_jokes, action.payload]
            }
        case SAVE_JOKE_FAILED:
            return {
                ...state,
                isSaving: false,
                save_err:action.payload
            }
        //#endregion
        //#region EDIT
        case EDIT_JOKE_START:
            return {
                ...state,
                isUpdating:true
            }
        case EDIT_JOKE_SUCCESS:
            return {
                ...state, 
                isUpdating:false
            }
        case EDIT_JOKE_FAILED:
            return {
                ...state,
                isUpdating:false
            }
        //#endregion

        default:
            return state
    }

}