import React, { useRef, useEffect, createRef } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import jwt_decode from 'jwt-decode'
import AxiosWithAuth from '../util/AxiosWithAuth'
import { Link } from 'react-router-dom'
import { Form, Input, Label, Button, CloseButton, Checkbox, FormHeader } from '../style/GlobalStyles'
import { TimelineMax, Power1, TweenMax, Elastic } from 'gsap'
import { addJoke } from '../store/actions'
const JokeForm = ({addJoke, history, data}) => {
    const { register, handleSubmit } = useForm()
    //--Logic 
    const onSubmit = (data) => {
        const logged_in_user = localStorage.getItem('logged_in_user')
        addJoke(logged_in_user, data)
        history.push('/joke-board')
    }

    //#region GSAP

    let formRef = useRef(null)
    const tl = new TimelineMax()
    useEffect(() => {
        tl.add(
            TweenMax.from(formRef, 1,
                {
                    x: 200,
                    y: -400,
                    opacity: 0,
                    width: 0,
                    height: 0,
                    ease: Elastic.easeOut.config(1.1, 1)
                }
            ))
        tl.add(
            TweenMax.from('.header', 1,
                {
                    opacity: 0,
                    ease: Power1
                }
            ))
        tl.add(
            TweenMax.from('Label', .8,
                {
                    opacity: 0,
                    x: -100,
                    ease: Elastic.easeOut.config(1.1, 0.4)
                }
            ))
        tl.add(
            TweenMax.from('.x', .8,
                {
                    opacity: 0,
                    x: -100,
                    ease: Elastic.easeOut.config(1.1, 0.4)
                }
            ))
        tl.add(
            TweenMax.from('.public-text', .8,
                {
                    opacity: 0,
                    ease: Elastic.easeOut.config(1.1, 0.4)
                }
            ))
    }, [])

    //#endregion

    return (
        <Form onSubmit={handleSubmit(onSubmit)} ref={el => formRef = el}>

            <Link to='/joke-board'>
                <CloseButton className="fas fa-times" />
            </Link>
            <FormHeader className='header'>Add a Joke...</FormHeader>
            <Label htmlFor='question'>
                <p>question:</p>
                <Input name='question' ref={register} />
            </Label>
            <Label htmlFor='answer'>
                <p>answer:</p>
                <Input name='answer' ref={register} />
            </Label>
            <Label htmlFor='checkbox'>
                <p>public:</p>
                <Checkbox type='checkbox' name='public' ref={register} />
            </Label>
            <p className='public-text'> by selecting public you allow all other users to see what you are saying.. Please be modest with public questions and remember children may see this at any point. thank you!</p>
            <Button className='x' type='submit'>Send to the Community!</Button>
        </Form>
    )
}
const _props = (store) => {
    return {
       
    }
}
export default connect(_props, {
    addJoke
})(JokeForm)