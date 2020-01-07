import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewJokeButton = () => {
    const JokeButton = styled(Link)`
        position:fixed;
        right:25px;
        bottom:25px;
        color:white;
        font-size:2rem;
        text-decoration:none;
        width:100px;
        text-align:center;
        background:#34b6e1;
        border-radius:10px;
        box-shadow:4px 4px 4px 0 rgba(22,22,22,.2);
    `
    return (
        <JokeButton to='/joke-board/new-joke'>+</JokeButton>)
}
export default NewJokeButton