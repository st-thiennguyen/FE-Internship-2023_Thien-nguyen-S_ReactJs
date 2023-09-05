import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';

import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = AnyAction;

export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootAction
>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
