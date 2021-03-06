import React, { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Input, Label, Button, FormHeader } from '../style/GlobalStyles'
import { TimelineMax, Power1, TweenMax, Elastic } from 'gsap'
import { connect } from 'react-redux'
import { loginUser } from '../store/actions'

const Login = ({history, loginUser}) => {
    const { register, handleSubmit } = useForm()
    //--Logic 
    const onSubmit = (data) => {
    
        loginUser(data)
        setTimeout(()=>{
            history.push('/joke-board')
        }, 1200)
        
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
                    ease: Elastic.easeOut.config(1.1, 0.4)
                }
            ))
        tl.add(
            TweenMax.from('Button', .8,
                {
                    opacity: 0,
                    x: -100,
                    ease: Elastic.easeOut.config(1.1, 0.4)
                }
            ))
    }, [])
    //#endregion


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
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.logReducer.isLoggedIn
    }
}
export default connect(mapStateToProps, { loginUser })(Login)