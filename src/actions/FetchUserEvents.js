import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'



export function fetchUserEvents(userId) {
  //console.log(userId)
  return function (dispatch) {
    dispatch(fetchUserEventsRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/users/${userId}/events`)
      .then(res => {
        //receive data
        dispatch(fetchUserEventsSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchUserEventsError(err))
      })
  }
}


 export function fetchUserEventsRequest () {
   return {
     type: types.FETCH_USER_EVENTS_REQUEST
   };
 }

  export function fetchUserEventsSuccess (events) {
   return {
     type: types.FETCH_USER_EVENTS_SUCCESS,
     data: events
   };
 }

  export function fetchUserEventsError (error) {
   return {
     type: types.FETCH_USER_EVENTS_ERROR,
     data: error
   };
 }