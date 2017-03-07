import Immutable from "immutable";

const LIST_INSERTION = 'LIST_INSERTION';

/**
 * Action Creator
 * @param content
 * @returns {{type: string, content: *}}
 */
export function add(content) {
  return {
    type: LIST_INSERTION,
    content
  }
}
/**
 * Initial State
 * @type {{list: [*]}}
 */
const initState = Immutable.fromJS({
  list: [],
});

/**
 * App Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LIST_INSERTION:
      return state.set('list', state.get('list').push(Immutable.fromJS(action.content)));
    default:
      return state;
  }
}