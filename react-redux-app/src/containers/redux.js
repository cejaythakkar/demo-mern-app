import React, { Component, Fragment } from 'react';
import Counter from '../components/redux/counter';
import Result from '../components/redux/result';
class Redux extends Component {
    render() {
        return (
            <Fragment>
                <Counter />
                <div className="seperator"><hr></hr></div>
                <Result />
            </Fragment>
        )
    }
}

export default Redux;