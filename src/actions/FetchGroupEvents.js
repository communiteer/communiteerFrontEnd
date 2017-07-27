import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchGroupEvents() {
  return function (dispatch) {
    dispatch(fetchGroupEventsRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/groups/:id/events`)
      .then(res => {
        //receive data
        dispatch(fetchGroupEventsSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchGroupEventsError(err))
      })
  }
}


 export function fetchGroupEventsRequest () {
   return {
     type: types.FETCH_GROUP_EVENTS_REQUEST 
   };
 }

  export function fetchGroupEventsSuccess (groupEvents) {
   return {
     type: types.FETCH_GROUP_EVENTS_SUCCESS,
     data: groupEvents
   };
 }

  export function fetchGroupEventsError (error) {
   return {
     type: types.FETCH_GROUP_EVENTS_ERROR,
     data: error
   };
 }