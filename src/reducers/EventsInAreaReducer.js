import * as types from '../actions/types';

const INITIAL_STATE = {
  events: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_EVENT_IN_AREA_REQUEST:
      return { ...state, loading: true, error: '' }

    case types.FETCH_EVENT_IN_AREA_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        events: action.data,
        loading: false,
        error: ''
      }

    case types.FETCH_EVENT_IN_AREA_ERROR:
      return { ...state, error: 'Encountered an error' }

    default:
      return state
  }
}