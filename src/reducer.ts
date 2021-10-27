import { AnyAction } from "redux";
import { SET_SEARCH_QUERY } from "./actions";
import { initialState } from "./store";
import { State } from "./typings/State";

export const mainReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload
      };
    }
    default:
      return state;
  }
};
