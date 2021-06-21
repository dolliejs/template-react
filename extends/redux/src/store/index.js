import { createStore, combineReducers } from 'redux';

import appModel from './models/app';

const reducer = combineReducers({
  app: appModel.reducer,
});

const store = createStore(reducer);

export default store;
