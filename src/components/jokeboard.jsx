import React, { useState, useEffect, useRef } from 'react'
import AxiosWithAuth from '../util/AxiosWithAuth'
import JokeCard from './jokecard'
import { connect } from 'react-redux'
import { getData } from '../store/actions'
import { LoadingBar, Board, List } from '../style/GlobalStyles'
import Loader from 'react-loader-spinner'
import SavedJokes from './savedJokes'
const JokeBoard = ({ data, getData }) => {

    const { isFetching, isDeleting, isAdding, isUpdating, jokes } = data

    const getJokes = () => {
        getData(true)
    }
    
    useEffect(() => {
        getJokes()
    }, [isDeleting, isAdding, isUpdating])


    if (isFetching) return (
        <LoadingBar>
            <Loader type='Bars' color='#34b6e1' height='200px' width='200px' />
        </LoadingBar>
    )

    return (
        <Board>
            <List>
                {jokes.map(
                    joke => {
                        return <JokeCard joke_owner={joke.joke_owner} key={joke.id} joke={joke} />
                    }).reverse()
                }
            </List>
            <SavedJokes />
        </Board>
    )
}
const _props = (store) => {
    return {
        data: store.dataReducer
    }
}
export default connect(_props, {
    getData
})(JokeBoard)