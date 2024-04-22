import { configureStore } from "@reduxjs/toolkit";
import { webSocketService } from ".";
import { AuthData, RootGameState } from "./gen/proto_codegen";

export const ActionType = {
  GO_START_PAGE: "GO_START_PAGE",
  SET_GAMESTATE: "SET_GAMESTATE",
  SET_AUTH_DATA: "SET_AUTH_DATA",
  SET_SELECTED_ANSWER: "SET_SELECTED_ANSWER",
};

const defaultState = {
  authData: null,
  gamestate: null,
  selectedAnswer: null,
};

// Action creators

export function goStartPage() {
  return {
    type: ActionType.GO_START_PAGE,
  };
}

export function setAuthData(authData) {
  return {
    type: ActionType.SET_AUTH_DATA,
    authData: authData,
  };
}

export function setGamestate(gamestate) {
  return {
    type: ActionType.SET_GAMESTATE,
    gamestate: gamestate,
  };
}

export function setSelectedAnswer(selectedAnswer) {
  return {
    type: ActionType.SET_SELECTED_ANSWER,
    selectedAnswer: selectedAnswer,
  };
}

// Reducer

const rootReducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_DATA:
      webSocketService.startPolling(action.authData);
      return {
        ...state,
        authData: action.authData,
      };
    case ActionType.SET_GAMESTATE:
      return {
        ...state,
        gamestate: action.gamestate,
      };
    case ActionType.SET_SELECTED_ANSWER:
      return {
        ...state,
        selectedAnswer: action.selectedAnswer,
      };
    case ActionType.GO_START_PAGE:
      webSocketService.stopPolling();
      return defaultState;
    default:
      console.warn("unkown action type", action);
      return state;
  }
};

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      console.log("no state in session storage");
      return defaultState;
    }
    const result = JSON.parse(serializedState);
    if (result.hasOwnProperty("gamestate")) {
      result.gamestate = RootGameState.fromObject(result.gamestate);
    }
    if (result.hasOwnProperty("authData")) {
      result.authData = AuthData.fromObject(result.authData);
    }
    console.log("loaded state", result);
    return result;
  } catch (err) {
    console.log("err while parsing stored state", err);
    return defaultState;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.warn("err while saving state", err);
  }
};

const store = configureStore({
  preloadedState: loadState(),
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export default store;
