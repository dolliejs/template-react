const AppModel = {
  namespace: 'app',
  state: {
    count: 0,
  },
  effects: {
    * increaseCount({ payload }, { put, select }) {
      const currentCount = yield select((state) => state.app.count);
      const result = currentCount + 1;
      yield put({
        type: 'setCount',
        payload: result,
      });
    },
    * decreaseCount({ payload }, { put, select }) {
      const currentCount = yield select((state) => state.app.count);
      const result = currentCount - 1;
      yield put({
        type: 'setCount',
        payload: result,
      });
    },
  },
  reducers: {
    setCount(state, { payload }) {
      if (!payload && typeof payload !== 'number') {
        return state;
      }

      return {
        ...state,
        count: payload,
      };
    },
  },
  subscriptions: {
    setup({ history }) {
      history.listen(data => console.log(data));
    },
  },
};

export default AppModel;
