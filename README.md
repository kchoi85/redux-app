# 💬 redux-app

State management with Redux.

## 3 building blocks in redux applications

- **Action** (Events): plain JS object for events
- **Store**: single JS object that includes our app state
- **Reducer** (Event Handler): one/many - responsible for updating the slice of the Store

![image](https://user-images.githubusercontent.com/52897657/120698540-2ffd0800-c47d-11eb-959b-9224291bb2c7.png)

## Steps

[x] Design the store
[x] Define the actions
[x] Create a reducer
[x] Set up the store

## 1) Design the Store

```javascript
{
    bugs: [
        {
            id: 1,
            description: "",
            resolved: false
        }
    ],
    currentUser: {}
}
```

## 2) Define the actions

- Add a Bug
- Mark as Resolved
- Delete a Bug

```javascript
{
    type: "bugAdded", // action expects a type and a payload
    payload: {
        id: 1,
        description: "...",
        reportedBy: "...",
        reportedOn: "...",
    }
}

{
    type: "bugRemoved", // action expects a type and a payload
    payload: {
        id: 1,
        description: "...",
        reportedBy: "...",
        reportedOn: "...",
    }
}
```

## 3) Create a reducer

```javascript
//reducer.js
import * as actions from "./actionTypes";

// []
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      // get all bugs except the bug of given id
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}

//actionTypes.js
export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
```

## 4) Set up the Store

```javascript
//store.js
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
```

## 5 index.js

```javascript
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
```

## Topics

- Redux Store
- Middleware
- Calling APIs
- Tesing Redux App
- Integration with React

```javascript
// each reducer will be responsible for updating specific slice of the store
function reducer(store, action) {
    const updated = {...store};

}

{
    categories: [],
    products: [],
    cart: {},
    user: {}
}
```

## Reference
![image](https://user-images.githubusercontent.com/52897657/120706181-c5e96080-c486-11eb-84b9-308c47ea81d1.png)

