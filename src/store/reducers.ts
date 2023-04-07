import { combineReducers } from 'redux';

interface State {
  counter: number;
}

const initialAppState: State = {
  counter: 0,
};

interface IncrementAction {
  type: 'INCREMENT';
}

interface DecrementAction {
  type: 'DECREMENT';
}

type AppAction = IncrementAction | DecrementAction;

export function appReducer(
  state = initialAppState,
  action: AppAction
): State {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  app: appReducer,
});
