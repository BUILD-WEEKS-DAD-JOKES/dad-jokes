import React, { useState, useEffect, useRef } from 'react'

import { Card, CardButton, CardHeader, Answer, Chatter, LoadingBar } from '../style/GlobalStyles'
import { TimelineMax, Elastic } from 'gsap/gsap-core'
import { TweenMax } from 'gsap/gsap-core'
import { Icon, CardButtons, CloseButton, OwnedCard } from '../style/GlobalStyles'
import { connect } from 'react-redux'
import { deleteJoke, saveJoke } from '../store/actions'
import ChatterButton from './sub/ChatterButton'

const JokeCard = ({ isPublic, joke_owner, joke, deleteJoke, saveJoke }) => {

    const [open, setOpen] = useState(false)

    const toggle = (val, cb) => {
        cb(!val)
    }

    const handleDelete = (e) => {
        var _del = window.confirm(`Are you sure you want to Delete this?`)
        if (_del) {
            deleteJoke(e)
        } else {
            return
        }
    }


    const checkOwnership = () => {
        if (!isPublic) {
            const logged_in_user = localStorage.getItem('logged_in_user')
            if (joke_owner === logged_in_user) {
                return (
                    <OwnedCard>
                        <CardHeader>{`"${joke.question}"`}</CardHeader>
                        <CloseButton id={joke.id} onClick={handleDelete} className={`fas fa-edit`} />
                        <CloseButton id={joke.id} onClick={handleDelete} className={`fas fa-times`} />
                    </OwnedCard>
                )
            } else {
                return <CardHeader>{`"${joke.question}"`}</CardHeader>

            }

        } else {
            return <CardHeader>{`"${joke.question}"`}</CardHeader>
        }


    }

    //#region GSAP
    let cardRef = useRef(null)
    let answerRef = useRef(null)
    const tl = new TimelineMax()
    const Open = () => {
        return tl.add(
            TweenMax.from(answerRef, 1.5, { opacity: 0, ease: Elastic.easeOut.config(1, 1) })
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
            <CardHeader>{`${joke.joke_owner} asks..`}</CardHeader>
            {checkOwnership()}
            <CardButtons>

                <Icon onClick={() => { }} className={`fas fa-thumbs-up`} />
                <Icon onClick={() => { }} className={`fas fa-thumbs-down`} />
                <ChatterButton icon='heart' joke={joke} saveJoke={saveJoke}/>

                <CardButton onClick={() => {
                    if (!open) {
                        Open().play()
                    }
                    toggle(open, setOpen)
                }}><i className='fas fa-question' /></CardButton>

            </CardButtons>
            <Answer ref={el => answerRef = el} className={`answer ${!open ? 'closed' : ''}`}> {joke.answer}</Answer>
        </Card>
    )
}
const mapStateTo = (state) => {
    return {
        data: state.dataReducer
    }
}
export default connect(mapStateTo, {
    deleteJoke, saveJoke
})(JokeCard)