import * as actionTypes from '../actions/actionTypes'
import { createReducer } from './util'

const actionHandlers = {
  [actionTypes.FETCH_USERS]: (oldState, action) => {
    return action.meta.success ? action.payload.data : oldState
  },
}

const defaultValue = []
export default createReducer(actionHandlers, defaultValue)
