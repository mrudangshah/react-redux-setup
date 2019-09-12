const initialState = {
  userData: [],
}

export const readData = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'READ_USER':
      return {
        userData: action.data
      }
    default:
      return state
  }
}

export default readData;