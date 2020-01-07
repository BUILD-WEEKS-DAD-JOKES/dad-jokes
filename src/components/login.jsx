import React, { useRef, useEffect, createRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Form, Input, Label, Button, FormHeader } from '../style/GlobalStyles'
import { TimelineMax, Power1, TweenMax, Elastic } from 'gsap'
const Login = (props) => {
    const { register, handleSubmit } = useForm()
    //--Logic 
    const onSubmit = (data) => {
        axios.post('https://dad-jokes--api.herokuapp.com/auth/login', data)
            .then(res => {
                if (res.status === 200) {
                    const token = res.data.token
                    if (!token) {
                        alert('something when wrong authenticating...')
                    } else {
                        localStorage.setItem('token', token)
                        props.history.push('/joke-board')
                    }
                } else {
                    alert('sorry.. somethings wrong.. try again in a little bit..')
                }
            }).catch((err) => {
                alert(JSON.stringify({ messege: 'sorry something looks to be wrong here... ', err }))
            })
    }

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
                    ease:Elastic.easeOut.config(1.1, 1)
                }
            ))
        tl.add(
            TweenMax.from('h1', 1,
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
                    ease:Elastic.easeOut.config(1.1, 0.4)
                }
            ))
        tl.add(
            TweenMax.from('Button', .8,
                {
                    opacity: 0,
                    x: -100,
                    ease:Elastic.easeOut.config(1.1, 0.4)
                }
            ))
    }, [])
    return (
        <Form onSubmit={handleSubmit(onSubmit)} ref={el => formRef = el}>
            <FormHeader>Login</FormHeader>
            <Label htmlFor='username'>
                <p>username:</p>
                <Input name='username' ref={register} />
            </Label>
            <Label htmlFor='password'>
                <p>password:</p>
                <Input type='password' name='password' ref={register} />
            </Label>
            <Button type='submit'>Login</Button>
        </Form>
    )
}

export default Login