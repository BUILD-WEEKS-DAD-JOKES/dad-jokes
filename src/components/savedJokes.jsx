import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Sideboard, SideboardTitle, SavedList, SavedCard, CloseButton, SaveCardBox } from '../style/GlobalStyles'
import { getSavedJokes } from '../store/actions'
const SavedJokes = ({ data, getSavedJokes }) => {

    const { saved_jokes, isSaving } = data
    useEffect(() => {
        getSavedJokes()
    }, [isSaving])
    return (
        <Sideboard>
            <SideboardTitle> Favorites:</SideboardTitle>
            <SavedList>
                {saved_jokes && saved_jokes.map(joke => {
                    return (
                        <SavedCard>
                            <p>{joke.question}</p>
                            <CloseButton className='fas fa-trash'/>
                        </SavedCard>)
                })}
            </SavedList>
        </Sideboard>
    )
}



const _props = (store) => {
    return {
        data: store.dataReducer
    }
}
export default connect(_props, {
    getSavedJokes
})(SavedJokes)