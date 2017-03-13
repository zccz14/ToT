import Immutable from "immutable";

const initState = Immutable.fromJS({
  items: []
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}