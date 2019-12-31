import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JokeCard from './jokecard'
const Landing = () => {
    const [jokes, setJokes] = useState([])

    const getJokes = () => {
        axios.get('https://dad-jokes--api.herokuapp.com/api/jokes')
            .then(res => {
                setJokes(res.data)
            }).catch((err) => {
                alert(JSON.stringify(err))
            })

    }
    useEffect(() => {
        getJokes()
    }, [])
    return (
        <>
            {jokes.map(
                joke => {
                    return <JokeCard key={joke.id} joke={joke} />
                }
            )
            }
        </>
    )
}

export default Landing