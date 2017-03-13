import Immutable from "immutable";
import {createAction} from "redux-actions";

class Factory {

  constructor(id) {
    this.CreateAction = id + '/create';
    this.LoadAction = id + '/load';
    this.UpdateAction = id + '/update';
    this.RemoveAction = id + '/remove';
  }


  Create = createAction(this.CreateAction);
  Load = createAction(this.LoadAction);
  Update = createAction(this.UpdateAction);
  Remove = createAction(this.RemoveAction);

  initState = Immutable.fromJS({
    items: {}
  });

  reducer = (state = this.initState, action) => {
    switch (action.type) {
      case this.CreateAction: {
        let {id, ...content} = action.payload;
        let oldItems = state.get('items');
        let newItems = oldItems.set(id, content);
        return state.set('items', newItems);
      }
      case this.LoadAction: {
        let newItems = state.get('items');
        action.payload.forEach((v) => {
          let {id, ...content} = v;
          newItems = newItems.set(id, content);
        });
        return state.set('items', newItems);
      }
      case this.UpdateAction: {
        let {id, ...content} = action.payload;
        let newItems = state.get('items');
        newItems = newItems.set(id, content);
        return state.set('items', newItems);
      }
      case this.RemoveAction: {
        let {id} = action.payload;
        let newItems = state.get('items');
        newItems = newItems.delete(id, null);
        return state.set('items', newItems);
      }
      default:
        return state;
    }
  }
}
export default Factory;