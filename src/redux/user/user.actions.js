export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER', // action's type must align with reducer's type
  payload: user
})
