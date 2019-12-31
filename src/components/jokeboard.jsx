import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AxiosWithAuth from '../util/AxiosWithAuth'
import JokeCard from './jokecard'
const JokeBoard = ()=>{
    const [jokes, setJokes] = useState([])

    const getJokes = ()=>{
        AxiosWithAuth().get('/jokes/all')
        .then(res=>{
            setJokes(res.data)
        }).catch((err)=>{
            alert(JSON.stringify(err))
        })

    }
    useEffect(()=>{
        getJokes()
    }, [])
    return (
        <>
        {jokes.map(
            joke=>{
                return <JokeCard key={joke.id} joke={joke} />
            }
        )
        }
        </>
    )
}

export default JokeBoard