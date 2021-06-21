import { createStore, combineReducers } from 'redux';

import appModel, { AppAction, AppState } from './models/app';

export interface State {
  app: AppState;
}

export type Action = AppAction;

const reducer = combineReducers<State>({
  app: appModel.reducer,
});

const store = createStore<State, Action, any, any>(reducer);

export default store;
