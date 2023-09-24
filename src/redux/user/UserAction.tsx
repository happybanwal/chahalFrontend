import axios from 'axios'
import Axios from '../../../utils/Axios'
import { USER_REQUEST, USER_SUCCESS, USER_FAIL } from './UserType'

export const loginUser =
  (email: string, password: string) =>
  async (dispatch: any, getState: () => any) => {
    dispatch({
      type: USER_REQUEST,
    })

    try {
      const credentials = {
        email: email,
        password: password,
      }

      const res = await Axios.post('login', credentials)
      //   console.log(res.data)

      dispatch({
        type: USER_SUCCESS,
        payload: res.data,
      })

      return res.data
    } catch (error) {
      dispatch({
        type: USER_FAIL,
        payload: error,
      })

      throw error
    }
  }

export const registerUser =
  (email: string, password: string, name: string) =>
  async (dispatch: any, getState: () => any) => {
    dispatch({
      type: USER_REQUEST,
    })

    try {
      const credentials = {
        email: email,
        password: password,
        name: name,
      }

      const res = await Axios.post('register', credentials)
      console.log(res.data)

      dispatch({
        type: USER_SUCCESS,
        payload: res.data,
      })

      return res.data
    } catch (error) {
      dispatch({
        type: USER_FAIL,
        payload: error,
      })

      throw error
    }
  }
