import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchAllEventsInArea(areaId) {
  return function (dispatch) {
    dispatch(fetchEventsInAreaRequest());
    axios.get(`${ROOT}/areas/${areaId}/events`)
      .then(res => {
        dispatch(fetchEventsInAreaSuccess(res.data.data))
      })
      .catch(err => {
        dispatch(fetchEventsInAreaError(err))
      })
  }
}

 export function fetchEventsInAreaRequest () {
   return {
     type: types.FETCH_EVENT_IN_AREA_REQUEST
   };
 }

  export function fetchEventsInAreaSuccess (events) {
   return {
     type: types.FETCH_EVENT_IN_AREA_SUCCESS,
     data: events
   };
 }

  export function fetchEventsInAreaError (error) {
   return {
     type: types.FETCH_EVENT_IN_AREA_ERROR,
     data: error
   };
 }