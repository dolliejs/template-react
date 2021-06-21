import { Action } from 'redux';

export interface AppState {
  count: number;
}

export type AppActionTypes = 'INCREASE' | 'DECREASE';
export interface AppAction extends Action {
  type: AppActionTypes;
  payload?: any;
}

const initialState: AppState = {
  count: 0,
};

export const increaseCount = () => ({ type: 'INCREASE' });
export const decreaseCount = () => ({ type: 'DECREASE' });

const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
  case 'INCREASE': {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  case 'DECREASE': {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  default:
    return state;
  }
};

export {
  reducer,
};

export default {
  reducer,
  actions: {
    increaseCount,
    decreaseCount,
  },
};
