import React, { Component } from 'react'
import { Loading as withLoader } from '../HOC/loader.hoc';
import { connect } from 'react-redux';
import { getTodos } from '../store/actions/action.todos';

class Todos extends Component {
    
    render() {
        return (
            <div>
                <h1>This is Todos page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos : state.todos.todos,
    isloading : state.common.isloading
})
const mapDispatchToProps = (dispatch) => ({
    fetchData : () => dispatch(getTodos())
});

export default connect(mapStateToProps,mapDispatchToProps)(withLoader("fetching todos")(Todos));