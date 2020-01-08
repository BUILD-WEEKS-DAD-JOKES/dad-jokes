import React from 'react'
import { JokeButton } from '../../style/GlobalStyles'

const NewJokeButton = () => {

    return <JokeButton to='/joke-board/new-joke'><i className='fas fa-plus' /></JokeButton>
}
export default NewJokeButton