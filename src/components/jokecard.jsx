import React, { useState, useEffect } from 'react'

import { Card, CardButton, CardHeader, Answer, Chatter } from '../style/GlobalStyles'
const JokeCard = props => {
    const [open, setOpen] = useState(false)
    const [upActive, setUpActive] = useState(false)
    const [downActive, setdownActive] = useState(false)
    const toggle = (val, cb) => {
        console.log('toggle')
        cb(!val)
    }
    useEffect(()=>{
        if(upActive === true){
            setdownActive(false)
        }
        else if(downActive){
            setUpActive(false)
        }
    }, [upActive, downActive])
    return (
        <Card>
            <CardHeader>{props.joke.question}</CardHeader>
            <Chatter>
                <i onClick={() => {
                    toggle(upActive, setUpActive)
                }} className={`fas fa-thumbs-up ${upActive ? 'active' : ''}`} />
                <i onClick={() => {
                    toggle(downActive, setdownActive)
                }} className={`fas fa-thumbs-down ${downActive ? 'active' : ''}`} />
            </Chatter>
            <CardButton onClick={() => {
                toggle(open, setOpen)
            }}><i className='fas  fa-question' /></CardButton>
            <Answer className={`answer ${!open ? 'closed' : ''}`} >{props.joke.answer}</Answer>
        </Card>
    )
}

export default JokeCard