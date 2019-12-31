import axios from 'axios'

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://dad-jokes--api.herokuapp.com/api',
        headers: {
            'Authorization': token
        }

    })
}
export default AxiosWithAuth