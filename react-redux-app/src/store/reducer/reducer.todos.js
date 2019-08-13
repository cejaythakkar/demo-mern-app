import { SAVETODOS, SELECTTODO ,DESELECTTODO, SELECTALL ,UNSELECTALL} from "../actions/actiontypes";
const initialState = {
  todos: [],
  selectedTodos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVETODOS:
      const {
        payload: {
          data: {
            todos: { data }
          }
        }
      } = action;
      return { ...state, todos: data };
    case SELECTTODO:
      let { payload : {id} } = action;
      return {
        ...state ,
        selectedTodos:[...state.selectedTodos,id]
      }
    case DESELECTTODO:
      let desId = action.payload.id;
      return {
        ...state , 
        selectedTodos:state.selectedTodos.filter(id => id !== desId)
      }
    case SELECTALL:
      return {
        ...state,
        selectedTodos:state.todos.map(todo =>  todo.id)
      }
    case UNSELECTALL:
      console.log('in here reducer...');
      return {
        ...state,
        selectedTodos:[]
      }
    default:
      return state;
  }
};
