export const createReducer = (actionHandlers = {}, defaultValue) => (state, action) => {
  return actionHandlers[action.type]
    ? actionHandlers[action.type](state, action)
    : defaultValue
}
