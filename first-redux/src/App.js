import React, { Component} from "react";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import "./App.css";
import Box from "./Box";
import reducer from './reducers/index'
import {getUserDataAction} from './actions/index'

class App extends Component {
    state = {
        body: [],
        edit: false
    };

    remove = (e) => {
      let id = e.target.id;
      let body = this.state.body.filter((item) => item.id !== id);
      this.setState({ body });
    };

    store = createStore(combineReducers(reducer), applyMiddleware(thunk))

    showUsers = () => {
      console.log(this.store.getState().getData)
      this.setState({body: this.store.getState().getData})
    }
    
    componentDidMount(){
      this.store.dispatch(getUserDataAction())
    }

    render() {
      this.store.subscribe(this.showUsers)
      
        return (
                <div
                    className="container"
                    style={this.state.edit ? { opacity: 0 } : { opacity: 1 }}
                >
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>City</th>
                                <th><span><i className="fas fa-user-plus"></i></span></th>
                            </tr>
                            {this.state.body.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        {...item}
                                        remove={this.remove}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default App;
