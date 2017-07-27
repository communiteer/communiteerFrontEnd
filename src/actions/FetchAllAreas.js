import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchAllAreas() {
  return function (dispatch) {
    dispatch(fetchAllAreasRequest());
    axios.get(`${ROOT}/areas`)
      .then(res => {
        //receive data
        dispatch(fetchAllAreasSuccess(res.data.areas))
      })
      .catch(err => {
        dispatch(fetchAllAreasError(err))
      })
  }
}

 export function fetchAllAreasRequest () {
   return {
     type: types.FETCH_ALL_AREAS_REQUEST
   };
 }

  export function fetchAllAreasSuccess (areas) {
   return {
     type: types.FETCH_ALL_AREAS_SUCCESS,
     data: areas
   };
 }

  export function fetchAllAreasError (error) {
   return {
     type: types.FETCH_ALL_AREAS_ERROR,
     data: error
   };
 }