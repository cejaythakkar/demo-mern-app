import React from "react";
import { connect } from "react-redux";
import { toggleSelection } from '../../store/actions/action.todos';

const isSelected = ({id,selectedTodos}) => selectedTodos.indexOf(id) !== -1? 'selected' : '';  
function Todo({ title, completed, id, userId ,toggleSelection , selectedTodos}) {
  return (
    <li
      key={id}
      className={`todo-item ${completed ? "completed" : "incomplete"} ${isSelected({id , selectedTodos})}`}
    >
      <div className="todo-overlay">
        <div className="checkbox-wrapper">
          <input type="checkbox" onChange={( event ) => toggleSelection({id,checked : event.target.checked})} checked={selectedTodos.indexOf(id) !== -1}/>
        </div>
      </div>
      <div className="todo">
        <h3 className="todo-title">{title}</h3>
        <h5 className="todo-status">{`Status - ${
          completed ? "completed" : "did not complete yet"
        }`}</h5>

        <div className="button-wrapper">
          <button className="edit-todo">Edit</button>
          <button className="delete-todo">Delete</button>
        </div>
      </div>
    </li>
  );
}

const mapStateToProps = state => ({
    selectedTodos : state.todos.selectedTodos
});
const mapDispatchToProps = dispatch => ({
  toggleSelection: ({id,checked}) => {
      dispatch(toggleSelection({id,checked}));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
