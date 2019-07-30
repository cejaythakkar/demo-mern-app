import React, { Component , Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/action.index';

class Result extends Component {
    render() {
        return (
            <Fragment>
                <div className="results-wrapper">
                    <button type="button" onClick={() => this.props.storeResult(this.props.counterValue)}>Store Result</button>
                    <button type="button" onClick={this.props.clearResults}>Delete Result</button>
                    <ul className="list-wrapper">
                        {
                            this.props.result.map(item => (
                                <li onDoubleClick={(e) => this.props.deleteResult(item.id)} key={item.id}><span>{item.value}</span></li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result : state.result.result,
        counterValue : state.ctr.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeResult : (counterValue) => dispatch(action.storeResult(counterValue)),
        deleteResult : (id) => dispatch(action.deleteResult(id)),
        clearResults : () => dispatch(action.clearStoredResult())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result);