import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../media/logo.svg'
const Navigation = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const Nav = styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:10px;
        background:#34b6e1;
    `
    const Buttons = styled.div`
        
    `
    const Button = styled(Link)`
        color:white;
        padding:10px;
        text-decoration:none;
        margin:5px;
        border-radius:5px;
        border:1px solid white;   
    `
    var token = localStorage.getItem('token')
    const handleLogout = () => {
        localStorage.clear()
    }
    return (
        <Nav>
            <Link to='/'>
                <img src={logo} />
            </Link>
            {
                !token ? (

                    <Buttons>
                        <Button to='/login'>Login</Button>
                        <Button to='/register'>Sign up</Button>
                    </Buttons>
                )
                    :
                    <Button onClick={handleLogout} to='/login'>Logout</Button>
            }
        </Nav>
    )
}

export default Navigation