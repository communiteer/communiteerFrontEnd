import * as types from '../actions/types';

const INITIAL_STATE = {
  eventSkills: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_EVENT_SKILLS_REQUEST:
      return { ...state, loading: true, error: '' }

    case types.FETCH_EVENT_SKILLS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        eventSkills: action.data,
        loading: false,
        error: ''
      }

    case types.FETCH_EVENT_SKILLS_ERROR:

      return { ...state, error: 'Encountered an error' }

    default:
      return state
  }
}