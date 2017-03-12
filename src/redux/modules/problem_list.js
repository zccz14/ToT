import Immutable from "immutable";
import {createAction} from "redux-actions";

const LOAD = 'problemLists/LOAD';
const CREATE = 'problemLists/CREATE';
const UPDATE = 'problemLists/UPDATE';
const REMOVE = 'problemLists/REMOVE';

export const loadProblemLists = createAction(LOAD);
export const createProblemLists = createAction(CREATE);
export const updateProblemLists = createAction(UPDATE);
export const removeProblemLists = createAction(REMOVE);

const initState = Immutable.fromJS({
  items: []
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOAD:
      let contents = state.get('items');
      action.payload.content.forEach((v, i) => {
        contents = contents.push(Immutable.fromJS(v));
      });
      return state.set('items', contents);
    default:
      return state;
  }
}