import * as types from '../actions/types';

const INITIAL_STATE = {
 userEvents:[],
 items:{},
 loading: false,
 error:null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_EVENTS_REQUEST:
      return {...state,loading:true}
    
    case types.FETCH_USER_EVENTS_SUCCESS:
      return {...state,...INITIAL_STATE, userEvents: action.data}

    case types.FETCH_USER_EVENTS_ERROR:
      return {...state,error:'There has been an error'}
    
    default:
      return state
  }
}