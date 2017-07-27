import * as types from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case types.AUTH_EMAIL_CHANGED:
      return { ...state, email: action.data };
    
    case types.AUTH_PASSWORD_CHANGED:
      return { ...state, password: action.data};

    case types.LOGIN_USER:
      return { ...state, loading: true, error: ''}

    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.data }

    case types.LOGIN_USER_FAIL: 
      return { ...state, error: 'Authentication Failed', password: '', loading: false}

    default:
      return state;
  }
}