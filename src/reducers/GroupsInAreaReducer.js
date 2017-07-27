import * as types from '../actions/types';

const INITIAL_STATE = {
  groups: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_GROUP_BY_AREA_REQUEST:
      return { ...state, loading: true, error: '' }

    case types.FETCH_GROUP_BY_AREA_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        groups: action.data,
        loading: false,
        error: ''
      }

    case types.FETCH_GROUP_BY_AREA_ERROR:

      return { ...state, error: 'Encountered an error' }

    default:
      return state
  }
}