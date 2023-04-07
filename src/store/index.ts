// src/store/index.ts
import { combineReducers } from 'redux';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

//const store = createStore(rootReducer);

export default rootReducer;
