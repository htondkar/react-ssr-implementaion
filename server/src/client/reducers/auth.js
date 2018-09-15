import * as actionTypes from '../actions/actionTypes'

import { createReducer } from './util'

const actionHandlers = {
  [actionTypes.FETCH_CURRENT_USER]: (oldState, action) => {
    return action.meta.success ? action.payload.data || false : oldState
  },
}

const defaultValue = null

export default createReducer(actionHandlers, defaultValue)
