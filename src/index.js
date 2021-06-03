import store from "./store";
import { bugAdded } from "./actions";
import * as actions from "./actionTypes";

// before dispatching an action,
// subscribe function is called everytime the state of store is changed
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
