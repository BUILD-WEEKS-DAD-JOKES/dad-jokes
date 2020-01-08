import { logReducer } from './logReducer'
import { dataReducer } from './dataReducer'
import { registerReducer } from './registerReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({ logReducer, registerReducer, dataReducer })

