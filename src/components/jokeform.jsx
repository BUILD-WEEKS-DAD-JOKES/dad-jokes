import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import jwt_decode from 'jwt-decode'
import AxiosWithAuth from '../util/AxiosWithAuth'
import {Form, Input, Label, Button} from '../style/GlobalStyles'

const Register = (props) => {
    const { register, handleSubmit } = useForm()
    //--Logic 
    const onSubmit = (data) => {
        //have to pass in the current logged in user...
        const decoded = jwt_decode(localStorage.getItem('token'))
        if(!decoded){
            console.log('sorry but you cant be authenticated....')
        }else{
            console.log(decoded)
            AxiosWithAuth().post(`/jokes/${decoded.subject}`, data)
            .then(res => {
                if (res.status === 201) {
                    props.history.push('/joke-board')
                } else {
                    alert('sorry.. somethings wrong.. try again in a little bit..')
                }
            }).catch((err) => {
                alert(JSON.stringify({ messege: 'sorry something looks to be wrong here... ', err }))
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder='question' name='question' ref={register} />
            <Input placeholder='answer' name='answer' ref={register} />
            <Input type='checkbox' name='public' ref={register} />
            <Button type='submit'>Sign Up!</Button>
        </Form>
    )
}

export default Register