import {createStore} from 'redux'
import {profileReducer} from '../reducers/projReducers'

const store = createStore(profileReducer)

export default store 