import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchUserGroups() {
  return function (dispatch) {
    dispatch(fetchUserGroupsRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/users/:user_id/groups`)
      .then(res => {
        //receive data
        dispatch(fetchUserGroupsSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchUserGroupsError(err))
      })
  }
}


 export function fetchUserGroupsRequest () {
   return {
     type: types.FETCH_USER_GROUPS_REQUEST
   };
 }

  export function fetchUserGroupsSuccess (userGroups) {
   return {
     type: types.FETCH_USER_GROUPS_SUCCESS,
     data: userGroups
   };
 }

  export function fetchUserGroupsError (error) {
   return {
     type: types.FETCH_USER_GROUPS_ERROR,
     data: error
   };
 }