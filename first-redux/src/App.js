import React, { Component } from "react";
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import "./App.css";
import Box from "./Box";
// import reducer from './reducers/index'
import { getUserDataAction } from './actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


class App extends Component {

    // remove = (e) => {
    //     let id = e.target.id;
    //     let body = this.state.body.filter((item) => item.id !== id);
    //     this.setState({ body });
    // };

    // showUsers = () => {
    //     console.log(this.store.getState().getData, 'showUsers')
    //     this.setState({ body: this.store.getState().getData })
    // }

    componentDidMount() {
        this.props.getUserDataAction()
    }

    render() {
        // console.log(this.store.getState().getData, 'render');
        // this.store.subscribe(() => {
        //     this.showUsers()
        //     console.log(this.store.getState().getData, 'subscribe')
        // })
        console.log(this.props.body);
        
        return (
            <div
                className="container"
            // style={this.state.edit ? { opacity: 0 } : { opacity: 1 }}
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
                        {this.props.body.length>0 && this.props.body.map((item, index) => {
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

function mapStateToProps(state) {
    return {
        body: state.getData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUserDataAction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);