import {logReducer} from './logReducer'
import {dataReducer} from './dataReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({logReducer, dataReducer})

