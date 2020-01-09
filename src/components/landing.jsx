import React, { useEffect } from 'react'
import JokeCard from './jokecard'
import { connect } from 'react-redux'
import { getData } from '../store/actions'
import { LoadingBar } from '../style/GlobalStyles'
import Loader from 'react-loader-spinner'

const Landing = ({data, getData, isAdding, isSaving, isUpdating}) => {

    const { jokes, isFetching } = data

    useEffect(() => {
        getData(false)
    }, [isAdding, isUpdating, isSaving])
   
   
    if (isFetching) 
        return (
        <LoadingBar>
            <Loader type='Bars' color='#34b6e1' height='200px' width='200px' />
        </LoadingBar>
    )
    return (
        <>
            {jokes.map(
                joke => {
                    return <JokeCard id={joke.joke_owner} isPublic={true} key={joke.id} joke={joke} />
                }).reverse()
            }
        </>
    )
}

const _props = (state) => {
    return {
        data: state.dataReducer
    }
}
export default connect(_props, {
    getData
})(Landing)