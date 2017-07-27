import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchGroupInfo() {
  return function (dispatch) {
    dispatch(fetchGroupInfoRequest());
    axios.get(`${ROOT}/groups/:id`)
      .then(res => {
        dispatch(fetchGroupInfoSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchGroupInfoError(err))
      })
  }
}


 export function fetchGroupInfoRequest () {
   return {
     type: types.FETCH_GROUP_INFO_REQUEST
   };
 }

  export function fetchGroupInfoSuccess (groupInfo) {
   return {
     type: types.FETCH_GROUP_INFO_SUCCESS,
     data: groupInfo
   };
 }

  export function fetchGroupInfoError (error) {
   return {
     type: types.FETCH_GROUP_INFO_ERROR,
     data: error
   };
 }