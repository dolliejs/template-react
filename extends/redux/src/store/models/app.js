const initialState = {
  count: 0,
};

export const increaseCount = () => ({ type: 'INCREASE' });
export const decreaseCount = () => ({ type: 'DECREASE' });

const reducer = (state = initialState, action) => {
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
