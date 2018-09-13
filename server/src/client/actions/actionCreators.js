import * as actionTypes from './actionTypes'
import Api from '../api/api'

export const fetchUsersActionCreator = (payload = null, meta = null) => ({
  type: actionTypes.FETCH_USERS,
  payload,
  meta,
})

export const fetchUsersThunk = _ => async dispatch => {
  const payload = await Api.fetchUsers()
  dispatch(fetchUsersActionCreator(payload, { success: true }))
}
