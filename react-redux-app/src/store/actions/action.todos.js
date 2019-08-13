import {
  SAVETODOS,
  GETSELECTEDTODOS,
  SELECTTODO,
  DESELECTTODO,
  SELECTALL,
  UNSELECTALL
} from "./actiontypes";
import { setLoading } from "./action.common";
import { fetchTodos } from "../../services/todos.services";

export const getTodos = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    setTimeout(async () => {
      const data = await fetchTodos();
      dispatch({
        type: SAVETODOS,
        payload: { data: { todos: data } }
      });
      dispatch(setLoading(false));
    }, 3000);
  },
  saveResult = data => ({
    type: SAVETODOS,
    payload: { value: data }
  });

export const toggleSelection = ({ id, checked }) => (dispatch, getState) => {
  console.log(id,checked);
  if (checked) {
    dispatch(select(id));
  } else {
    dispatch(deselect(id));
  }
};

export const deselect = id => ({
  type: DESELECTTODO,
  payload: { id }
});

export const select = id => ({
  type: SELECTTODO,
  payload: { id }
});

export const selectAll = () => ({
  type:SELECTALL
})

export const unSelectAll = () => ({
    type:UNSELECTALL
})