import * as actionTypes from './actionTypes'

export const fetchUsersActionCreator = (payload = null, meta = null) => ({
  type: actionTypes.FETCH_USERS,
  payload,
  meta,
})

export const fetchUsersThunk = _ => async (dispatch, getState, Api) => {
  const payload = await Api.fetchUsers()
  dispatch(fetchUsersActionCreator(payload, { success: true }))
}
