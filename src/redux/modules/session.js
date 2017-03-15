import Immutable from "immutable";
import {createAction} from "redux-actions";

const SignInAction = "SIGN_IN";
const SignInSuccessAction = "SIGN_IN_SUCCESS";
const SignInFailedAction = "SIGN_IN_FAILED";

const SignUpAction = "SIGN_UP";
const SignUpSuccessAction = "SIGN_UP_SUCCESS";
const SignUpFailedAction = "SIGN_UP_FAILED";

const SignOutAction = "SIGN_OUT";
const SignOutSuccessAction = "SIGN_OUT_SUCCESS";
const SignOutFailedAction = "SIGN_OUT_FAILED";

const NetworkAction = "NETWORK";
const NetworkFinishAction = "NETWORK_FINISH";


export const SignIn = createAction(SignInAction);
export const SignInSuccess = createAction(SignInSuccessAction);
export const SignInFailed = createAction(SignInFailedAction);
export const SignUp = createAction(SignUpAction);
export const SignUpSuccess = createAction(SignUpSuccessAction);
export const SignUpFailed = createAction(SignUpFailedAction);
export const SignOut = createAction(SignOutAction);
export const SignOutSuccess = createAction(SignOutSuccessAction);
export const SignOutFailed = createAction(SignOutFailedAction);
export const NetWork = createAction(NetworkAction);
export const NetWorkFinish = createAction(NetworkFinishAction);

const initState = Immutable.fromJS({
  errors: [],
  user: null,
  network: false
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SignInAction:
    case SignUpAction:
    case SignOutAction:
      return state
        .set('network', true);
    case SignInSuccessAction:
    case SignUpSuccessAction:
    case SignOutSuccessAction:
      return state
        .set('network', false)
        .set('user', Immutable.fromJS(action.payload));
    case SignInFailedAction:
    case SignUpFailedAction:
    case SignOutFailedAction:
      return state
        .set('network', false)
        .set('errors', state.get('errors').push(action.payload));
    case NetworkAction:
      return state.set('network', true);
    case NetworkFinishAction:
      return state.set('network', false);
    default:
      return state;
  }
}