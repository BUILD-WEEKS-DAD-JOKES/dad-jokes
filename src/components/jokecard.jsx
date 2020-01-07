import React, { useState, useEffect, useRef } from 'react'

import { Card, CardButton, CardHeader, Answer, Chatter } from '../style/GlobalStyles'
import { TimelineMax, Elastic } from 'gsap/gsap-core'
import { TweenMax } from 'gsap/gsap-core'
import { Icon, CardButtons, CloseButton, OwnedCard } from '../style/GlobalStyles'
import jwt_decode from 'jwt-decode';
import AxiosWithAuth from '../util/AxiosWithAuth'
const JokeCard = props => {
    const [open, setOpen] = useState(false)

    const toggle = (val, cb) => {
        cb(!val)
    }
    
    const handleDelete = (e) => {
        var _del = window.confirm(`Are you sure you want to Delete this?`)
        if (_del) {
            AxiosWithAuth().delete(`/jokes/${e.target.id}`).then((res) => {
                console.log(res.data)

            }).catch((_err) => {
                console.log(_err)
            })
        } else {
            return;
        }
    }

    const checkOwner = () => {
        const decoded = jwt_decode(localStorage.getItem('token'))
        console.log(decoded.subject)

        if(decoded.subject && props.id === decoded.subject){
            return (
                <OwnedCard>
                    <CardHeader>{props.joke.question}</CardHeader>
                    <CloseButton id={props.joke.id} onClick={handleDelete} className={`fas fa-edit`} />
                    <CloseButton id={props.joke.id} onClick={handleDelete} className={`fas fa-times`} />
                </OwnedCard>
                )      
        }else{
            return   <CardHeader>{props.joke.question}</CardHeader>
        }
 
          
    }

    //#region GSAP
    let cardRef = useRef(null)
    let answerRef = useRef(null)
    const tl = new TimelineMax()
    const Open = () => {
        return tl.add(
            TweenMax.from(answerRef, 1, { opacity: 0, x: '-100%', ease: Elastic.easeOut.config(1, 1) })
        )
    }
    useEffect(() => {
        tl.add(
            TweenMax.from(cardRef, 1, { opacity: 0, x: '-100%', ease: Elastic.easeOut.config(1, 1) })
        )

    }, [])
    //#endregion
    
    return (
        <Card ref={el => cardRef = el}>
            {checkOwner()}
            <CardButtons>

                <Icon onClick={() => { }} className={`fas fa-thumbs-up`} />
                <Icon onClick={() => { }} className={`fas fa-thumbs-down`} />

                <CardButton onClick={() => {
                    if (!open) {
                        Open().play()
                    }
                    toggle(open, setOpen)
                }}><i className='fas fa-question' /></CardButton>

            </CardButtons>
            <Answer ref={el => answerRef = el} className={`answer ${!open ? 'closed' : ''}`} >{props.joke.answer}</Answer>
        </Card>
    )
}

export default JokeCard