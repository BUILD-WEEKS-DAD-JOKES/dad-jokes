import React, { useState, useEffect } from 'react'
import { Icon } from '../../style/GlobalStyles'
import { connect } from 'react-redux'

const ChatterButton = ({ data, joke, saveJoke, icon, log }) => {
    const [disabled, setDisabled] = useState(false)

    const addToSavedList = (joke) => {
        saveJoke(localStorage.getItem('logged_in_user'), joke)
    }

    const handleClick = (e) => {
        if (e.target === disabled) {
            return
        }
        setDisabled(true)
        if (!disabled) {
            addToSavedList(joke)
        }
    }
    useEffect(() => {
        data && data.saved_jokes.map((_joke) => {
            if (_joke.joke_id === joke.id) {
                console.log('im here...')
                setDisabled(true)
            }
        })
    }, [])
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === true)
        return <Icon onClick={handleClick} disabled={disabled} className={`fas fa-${icon} ${disabled ? 'disabled' : ''}`} />
    else
        return null
}
const _props = (state) => {
    return {
        data: state.dataReducer
    }
}
export default connect(_props, {

})(ChatterButton) 