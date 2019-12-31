import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {Form, Input, Label, Button} from '../style/GlobalStyles'

const Register = (props) => {
    const { register, handleSubmit } = useForm()
    //--Logic 
    const onSubmit = (data) => {
        axios.post('https://dad-jokes--api.herokuapp.com/auth/register', data)
        .then(res=>{
            if(res.status === 201){
                alert('thanks! account created now login!')
                props.history.push('/login')
            }else{
                alert('sorry.. somethings wrong.. try again in a little bit..')
            }
        }).catch((err)=>{
            alert(JSON.stringify({messege:'sorry something looks to be wrong here... ', err}))
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up!</h1>
        <Label htmlFor='username'>
            <p>username:</p>
            <Input  name='username' ref={register} />
        </Label>
        <Label htmlFor='password'>
            <p>password:</p>
            <Input  type='password' name='password' ref={register} />
        </Label>
        <Button type='submit'>Sign up!</Button>
    </Form>
    )
}

export default Register