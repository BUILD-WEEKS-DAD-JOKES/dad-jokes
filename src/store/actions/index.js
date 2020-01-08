import axios from "axios"
import AxiosWithAuth from '../../util/AxiosWithAuth'
import jwt_decode from 'jwt-decode'

//#region LOGIN
export const LOG_IN_START = 'LOG_IN_START'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'

export const loginUser = (credentials) => dispatch => {
    console.log('im here...')
    dispatch({ type: LOG_IN_START })
    axios.post('https://dad-jokes--api.herokuapp.com/auth/login', credentials)
        .then(res => {
            if (res.status === 200) {
                const token = res.data.token
                if (!token) {
                    alert('something when wrong authenticating...')
                    dispatch({ type: LOG_IN_FAILED })
                } else {
                    localStorage.setItem('token', token)
                    localStorage.setItem('logged_in_user', res.data.logged_in_user.username)
                    localStorage.setItem('isLoggedIn', true)
                    dispatch({ type: LOG_IN_SUCCESS, payload: res.data.logged_in_user })

                }
            } else {
                dispatch({ type: LOG_IN_FAILED })
                alert('sorry.. somethings wrong.. try again in a little bit..')
            }
        }).catch((err) => {
            dispatch({ type: LOG_IN_FAILED, payload: err })
            alert('LOGIN FAILED: --> Please Create an Account!')
        })
}
//#endregion

//#region REGISTER
export const REGISTER_USER_START = 'REGISTER_USER_START'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

export const registerUser = (credentials) => dispatch => {
    dispatch({ type: REGISTER_USER_START })
    axios.post('https://dad-jokes--api.herokuapp.com/auth/register', credentials)
        .then(res => {
            if (res.status === 201) {
                alert('thanks! account created now login!')
                dispatch({ type: REGISTER_USER_SUCCESS })
            } else {
                dispatch({ type: REGISTER_USER_FAILED })
                alert('sorry.. somethings wrong.. try again in a little bit..')
            }
        }).catch((err) => {
            dispatch({ type: REGISTER_USER_FAILED })
            alert('REGISTER FAILED: --> Please Try another Username....')
        })
}
//#endregion

//#region DATA
export const DATA_FETCH_START = 'DATA_FETCH_START'
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS'
export const DATA_FETCH_FAILED = 'DATA_FETCH_FAILED'

export const getData = (allow_user) => dispatch => {
    dispatch({ type: DATA_FETCH_START })
    AxiosWithAuth().get(`https://dad-jokes--api.herokuapp.com/api/jokes/${allow_user === true ? 'all' : ''}`)
        .then(res => {
            dispatch({ type: DATA_FETCH_SUCCESS, payload: res.data })
        }).catch((err) => {
            dispatch({ type: DATA_FETCH_FAILED, payload: err })
        })
}

export const JOKE_DEL_START = 'JOKE_DEL_START'
export const JOKE_DEL_SUCCESS = 'JOKE_DEL_SUCCESS'
export const JOKE_DEL_FAILED = 'JOKE_DEL_FAILED'

export const deleteJoke = (e) => dispatch => {
    dispatch({ type: JOKE_DEL_START })
    AxiosWithAuth().delete(`/jokes/${e.target.id}`)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: JOKE_DEL_SUCCESS, payload: res.data.deleted_id })

        }).catch((_err) => {
            console.log(_err)
        })
}

export const JOKE_ADD_START = 'JOKE_ADD_START'
export const JOKE_ADD_SUCCESS = 'JOKE_ADD_SUCCESS'
export const JOKE_ADD_FAILED = 'JOKE_ADD_FAILED'

export const addJoke = (username, joke) => dispatch => {
    dispatch({ type: JOKE_ADD_START })
    AxiosWithAuth().post(`/jokes/${username}`, joke)
        .then(res => {
            if (res.status === 201) {
                // rerender = true
                dispatch({ type: JOKE_ADD_SUCCESS, payload: res.data })

            } else {
                alert('sorry.. somethings wrong.. try again in a little bit..')
            }
        }).catch((err) => {
            alert(JSON.stringify({ messege: 'sorry something looks to be wrong here... ', err, mw: 'im here boss...' }))
        })
}

export const SAVE_JOKE_START = 'SAVE_JOKE_START'
export const SAVE_JOKE_SUCCESS = 'SAVE_JOKE_FAILED'
export const SAVE_JOKE_FAILED = 'SAVE_JOKE_FAILED'

export const FETCH_SAVED_JOKE_START = 'FETCH_SAVED_JOKE_START'
export const FETCH_SAVED_JOKE_FAILED = 'FETCH_SAVED_JOKE_FAILED'
export const FETCH_SAVED_JOKE_SUCCESS = 'FETCH_SAVED_JOKE_SUCCESS'

export const getSavedJokes = () => dispatch => {
    dispatch({ type: FETCH_SAVED_JOKE_START })
    AxiosWithAuth().get(`/jokes/saved/${localStorage.getItem('logged_in_user')}`)
        .then((res) => {
            console.log('trying to find the data::', res)
            dispatch({ type: FETCH_SAVED_JOKE_SUCCESS, payload: res.data })
        }).catch((err) => {
            dispatch({ type: FETCH_SAVED_JOKE_FAILED, payload: err })
        })
}
export const saveJoke = (username, joke) => dispatch => {
    dispatch({ type: SAVE_JOKE_START })
    AxiosWithAuth().post(`/jokes/${username}/${joke.id}`)
        .then((res) => {
            dispatch({ type: SAVE_JOKE_SUCCESS, payload: res.data.joke})
        })
        .catch((err) => {
            dispatch({ type: SAVE_JOKE_FAILED, payload: err.messege })
        })
}