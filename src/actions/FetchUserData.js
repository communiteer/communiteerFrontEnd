import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchUserData(id) {
   // console.log('FETCH USER DATA REQUEST')
  return function (dispatch) {
    dispatch(fetchUserRequest());
    // go get data through fetch request
    // USER ID HARD CODED IN PROFILE PAGE!! Need prop passing
    axios.get(`${ROOT}/users/${id}`)
      .then(res => {
        //receive data
        dispatch(fetchUserSuccess(res.data.data[0]))
      })
      .catch(err => {
        dispatch(fetchUserError(err))
      })
  }
}


 export function fetchUserRequest () {
   return {
     type: types.FETCH_USER_INFO_REQUEST
   };
 }

  export function fetchUserSuccess (user) {
   return {
     type: types.FETCH_USER_INFO_SUCCESS,
     data: user
   };
 }

  export function fetchUserError (error) {
   return {
     type: types.FETCH_USER_INFO_ERROR,
     data: error
   };
 }
