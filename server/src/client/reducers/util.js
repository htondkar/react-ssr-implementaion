export const createReducer = (actionHandlers = {}, defaultValue) => (
  state = defaultValue,
  action
) => {
  return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state
}
