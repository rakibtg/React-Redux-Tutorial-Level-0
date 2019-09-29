import { createStore, combineReducers } from 'redux'

import headerSchema from './schema/header'
import headerReducer from './reducers/header'

const schema = {
  header: headerSchema
}

const reducers = combineReducers({
  header: headerReducer
})

export const store = createStore(reducers, schema)