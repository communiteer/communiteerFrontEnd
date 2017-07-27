import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchUserGroupsMember(userId) {
  return function (dispatch) {
    dispatch(fetchUserGroupsMemberRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/users/${userId}/groups`)
      .then(res => {
        //receive data
        dispatch(fetchUserGroupsMemberSuccess(res.data.data))
      })
      .catch(err => {
        dispatch(fetchUserGroupsMemberError(err))
      })
  }
}


 export function fetchUserGroupsMemberRequest () {
   return {
     type: types.FETCH_USER_GROUPS_MEMBER_REQUEST
   };
 }

  export function fetchUserGroupsMemberSuccess (userGroupsMember) {
   return {
     type: types.FETCH_USER_GROUPS_MEMBER_SUCCESS,
     data: userGroupsMember
   };
 }

  export function fetchUserGroupsMemberError (error) {
   return {
     type: types.FETCH_USER_GROUPS_MEMBER_ERROR,
     data: error
   };
 }