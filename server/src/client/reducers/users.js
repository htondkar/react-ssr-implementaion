import * as actionTypes from '../actions/actionTypes'
import { createReducer } from './util'

const defaultValue = []

const actionHandlers = {
  [actionTypes.FETCH_USERS]: (oldState, action) =>
    action.meta.success ? action.payload.data : oldState,
}

export default createReducer(actionHandlers, defaultValue)
