import { SAVETODOS } from "../actions/actiontypes";
const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVETODOS:
      const {
        payload: {
          value: { data }
        }
      } = action;
      return { ...state, todos: data };
  }
  return state;
};
