import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/action.index';

class Counter extends Component{
    render() {
        return (
            <Fragment>
                <header>Counter : {this.props.counterValue}</header>
                <div className="counter-control-wrapper">
                    <button type="button" onClick={this.props.increment}>Increment</button>
                    <button type="button" onClick={this.props.decrement}>Decrement</button>
                    <button type="button" onClick={() => this.props.add(5)}>Add 5</button>
                    <button type="button" onClick={() => this.props.subtract(5)}>Subtract 5</button>
                    <button type="button" onClick={this.props.resetCounter}>Rest Counter</button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counterValue: state.ctr.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(action.increment()),
        decrement: () => dispatch(action.decrement()),
        add: (value) => dispatch(action.add(value)),
        subtract: (value) => dispatch(action.subtract(value)),
        resetCounter : () => dispatch(action.resetCounter())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);