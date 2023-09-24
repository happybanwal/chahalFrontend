import { USER_REQUEST, USER_SUCCESS, USER_FAIL } from './UserType'

const initialState = {
  userDetails: {},
  loading: false,
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: payload,
      }

    case USER_FAIL:
      return {
        ...state,
        userDetails: {},
        loading: false,
        error: payload, // Add an error field to store error details
      }

    default:
      return state
  }
}
