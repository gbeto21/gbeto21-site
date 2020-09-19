import * as AuthActions from './auth.actions';

export interface State {
  user: any;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
}

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = {
        email: action.payload.email,
        userId: action.payload.userId,
        token: action.payload.token,
        expirationDate: action.payload.expirationDate
      };
      return {
        ...state,
        authError: null,
        user: user,
        loading: false
      };
      break;

    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      }

    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      }

    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
      break;

    default:
      return state;
      break;
  }
}
