import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewJokeButton = () => {
    const JokeButton = styled(Link)`
        padding:1rem;
        position:absolute;
        right:25px;
        bottom:25px;
        color:white;
        font-size:2rem;
        text-decoration:none;
        border-radius:20px;
        box-shadow:
            4px 4px 4px 0 rgba(22,22,22,.2),
            -2px -2px 4px 0 rgba(200, 200,200,.2);
    `
    return (
        <JokeButton to='/new-joke'>
            +
        </JokeButton>)
}
export default NewJokeButton