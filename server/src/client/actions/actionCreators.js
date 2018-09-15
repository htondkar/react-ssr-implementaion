import * as actionTypes from './actionTypes'

//
// ─── ALL USERS ──────────────────────────────────────────────────────────────────
//

export const fetchUsersActionCreator = (payload = null, meta = null) => ({
  type: actionTypes.FETCH_USERS,
  payload,
  meta,
})

export const fetchUsersThunk = _ => async (dispatch, _, Api) => {
  dispatch(fetchUsersActionCreator(await Api.fetchUsers(), { success: true }))
}

//
// ─── CURRENT USER ───────────────────────────────────────────────────────────────
//

export const fetchCurrentUserActionCreator = (payload = null, meta = null) => ({
  type: actionTypes.FETCH_CURRENT_USER,
  payload,
  meta,
})

export const fetchCurrentUserThunk = _ => async (dispatch, _, Api) => {
  dispatch(fetchCurrentUserActionCreator(await Api.fetchCurrentUser(), { success: true }))
}

// ────────────────────────────────────────────────────────────────────────────────
