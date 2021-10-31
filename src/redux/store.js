import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const store = createStore(rootReducer, persistedState, applyMiddleware(...middleware));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;