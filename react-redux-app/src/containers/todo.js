import React, { Component } from "react";
import { Loading as withLoader } from "../HOC/loader.hoc";
import { connect } from "react-redux";
import { getTodos , selectAll , unSelectAll } from "../store/actions/action.todos";
import TodoList from "../components/todos/todos.list";
import "../components/todos/todo.scss";

const todoContainerStyle = {
  height: "100%",
  overflow: "auto",
  padding: "3rem 0"
};
class Todos extends Component {
  render() {
    return (
      <div style={todoContainerStyle}>
        <div className="select-button-wrapper">
          <button onClick={this.props.selectAll}>select All</button>
          <button onClick={this.props.unSelectAll}>unselect all</button>
        </div>
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isloading: state.common.isloading
});
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getTodos()),
  selectAll : () => dispatch(selectAll()),
  unSelectAll : () => dispatch(unSelectAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader("fetching todos")(Todos));
