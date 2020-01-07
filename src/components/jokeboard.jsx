import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import AxiosWithAuth from '../util/AxiosWithAuth'
import JokeCard from './jokecard'
import { TimelineMax,TweenMax,Power1 } from 'gsap/gsap-core'

const JokeBoard = () => {
    const [jokes, setJokes] = useState([])
    const getJokes = () => {
        AxiosWithAuth().get('/jokes/all')
            .then(res => {
                setJokes(res.data)
            }).catch((err) => {
                alert(JSON.stringify(err), 'here boss...')
            })

    }
    useEffect(() => {
        getJokes()
       
    }, [])
 

    if(jokes.length> 0)
    return (
        <>
            {jokes.map(
                joke => {
                    return <JokeCard id={joke.joke_owner} key={joke.id} joke={joke} />

                }
            )
            }
        </>
    )
    else return(
        <>
        <h1>Loading...</h1>
        </>
    )
}

export default JokeBoard