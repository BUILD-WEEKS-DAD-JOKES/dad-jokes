import axios from "axios"
import jwt_decode from 'jwt-decode'

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
                    dispatch({type:LOG_IN_FAILED})
                } else {
                    localStorage.setItem('token', token)
                    try{
                        const decoded = jwt_decode(token)
                        dispatch({type:LOG_IN_SUCCESS, payload:decoded.subject})

                    }catch{

                    }
                }
            } else {
                alert('i made it here boss...')
                dispatch({type:LOG_IN_FAILED})
                alert('sorry.. somethings wrong.. try again in a little bit..')
            }
        }).catch((err) => {
            dispatch({type:LOG_IN_FAILED})
            alert(JSON.stringify({ messege: 'sorry something looks to be wrong here... ', err }))
        })
}
