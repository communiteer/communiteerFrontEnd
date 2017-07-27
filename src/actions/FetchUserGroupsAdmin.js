import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchUserGroupsAdmin(userId) {
  return function (dispatch) {
    dispatch(fetchUserGroupsAdminRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/users/${userId}/admin`)
      .then(res => {
        //receive data
        dispatch(fetchUserGroupsAdminSuccess(res.data.data))
      })
      .catch(err => {
        dispatch(fetchUserGroupsAdminError(err))
      })
  }
}


 export function fetchUserGroupsAdminRequest () {
   return {
     type: types.FETCH_USER_GROUPS_ADMIN_REQUEST
   };
 }

  export function fetchUserGroupsAdminSuccess (userGroupsAdmin) {
   return {
     type: types.FETCH_USER_GROUPS_ADMIN_SUCCESS,
     data: userGroupsAdmin
   };
 }

  export function fetchUserGroupsAdminError (error) {
   return {
     type: types.FETCH_USER_GROUPS_ADMIN_ERROR,
     data: error
   };
 }