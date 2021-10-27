import { compose, createStore } from "redux";
import { mainReducer } from "./reducer";
import { State } from "./typings/State";

export const initialState: State = {
  searchQuery: ""
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(mainReducer, initialState, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
