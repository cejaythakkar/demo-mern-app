import { SAVETODOS } from "./actiontypes";
import { setLoading } from "./action.common";
export const getTodos = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch({
        type: SAVETODOS,
        payload: { value: { data: [1, 2, 3] } }
      });
      dispatch(setLoading(false));
    }, 3000);
  },
  saveResult = data => ({
    type: SAVETODOS,
    payload: { value: data }
  });
