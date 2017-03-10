import Immutable from "immutable";

const initState = Immutable.fromJS({
  problems: []
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}