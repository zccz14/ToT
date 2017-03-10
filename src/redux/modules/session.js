import Immutable from "immutable";
import {createAction} from "redux-actions";

export const SignInAction = createAction("SIGN_IN", async(username, password) => {
  const res = await fetch('//localhost:8080/users/sign-in', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  });
  const data = await res.json();
  if (res.status === 200) {
    return data;
  } else {
    throw data;
  }
});

const initState = Immutable.fromJS({
  errors: [],
  user: null,
  network: false
});

export default function reducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case 'SIGN_IN':
    case 'SIGN_UP':
      return state.set('network', true);
    case 'SIGN_UP_SUCCESS':
    case 'SIGN_IN_SUCCESS':
      return state.set('user', Immutable.fromJS(action.payload)).set('network', false);
    case 'SIGN_UP_FAILED':
    case 'SIGN_IN_FAILED':
      return state.set('user', Immutable.fromJS(null)).set('network', false);
    default:
      return state;
  }
}