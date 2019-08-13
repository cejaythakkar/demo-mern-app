import React, { Component } from 'react'
import {connect } from 'react-redux';
import { Loading } from '../../HOC/loader.hoc';
import { getTodos } from '../../store/actions/action.todos';
import Todo from './todo';
import './todo.scss'    

class TodoList extends Component {
    render() {
        const {todos , isloading} = this.props;
        return (
            <ul className="todo-list">
                {todos.map(todo => (<Todo {...todo}/>))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    todos:state.todos.todos,
    isloading : state.common.isloading
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => getTodos()
});

export default connect(mapStateToProps,mapDispatchToProps)(Loading('fetching todos...')(TodoList));