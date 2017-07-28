import * as types from '../actions/types';

const INITIAL_STATE = {
  event_name: '',
  event_date: '',
  event_time: '',
  description: '',
  contact_details: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EVENT_UPDATE:
      return {
        ...state,
        [action.data.prop]: action.data.value
      }

    case types.ADD_EVENT_CREATE:
      return {
        ...state,
        event_name: '',
        event_date: '',
        event_time: '',
        description: '',
        contact_details: ''
      }

    default:
      return state;
  }
}