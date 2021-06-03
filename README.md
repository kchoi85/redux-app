# 💬 redux-app

State management with Redux.

## 3 building blocks in redux applications

- Action (Events): plain JS object for events
- Store: single JS object that includes our app state
- Reducer (Event Handler): one/many - responsible for updating the slice of the Store

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
