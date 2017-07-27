import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchEvent() {
  return function (dispatch) {
    dispatch(fetchEventRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/events/:id`)
      .then(res => {
        //receive data
        dispatch(fetchEventSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchEventError(err))
      })
  }
}


 export function fetchEventRequest () {
   return {
     type: types.FETCH_EVENT_REQUEST
   };
 }

  export function fetchEventSuccess (event) {
   return {
     type: types.FETCH_EVENT_SUCCESS,
     data: event
   };
 }

  export function fetchEventError (error) {
   return {
     type: types.FETCH_EVENT_ERROR,
     data: error
   };
 }