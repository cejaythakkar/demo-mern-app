import React, { Component } from 'react'
import axios from 'axios';
export default class Users extends Component {
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((result) => {
                console.log(result.data);   
            }).catch((err) => {
                console.log(err);
            });;

    }
    render() {
        return (
            <div>
                <h1>This is Users page</h1>
            </div>
        )
    }
}
