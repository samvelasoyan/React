import React, { Component, Fragment } from "react";
import "./styles/App.css";
import Box from "./components/Box.js";
import Form from './components/Form.js';
import Front from './components/Front.js';
import { postUserDataAction, getUserDataAction, addUserAction, editAction } from './actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


class App extends Component {

    addUser = () => {
      this.props.addUserAction()
      this.props.getUserDataAction()
    }

    componentDidMount() {
      this.props.postUserDataAction()
    }

    render() {
        return (
          <Fragment>
            <div
                className="container"
                style={this.props.data.edit ? { opacity: 0 } : { opacity: 1 }}
            >
                {!this.props.data.body.length>0 ? (<Front showUsers={this.props.getUserDataAction}/>):
                  (<table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Country</th>
                            <th>
                              <span onClick={()=>this.addUser('','','','')}><i className="fas fa-user-plus"></i></span>
                              </th>
                        </tr>
                        {this.props.data.body.length>0 && this.props.data.body.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    {...item}
                                    remove={this.remove}
                                />
                            );
                        })}
                    </tbody>
                </table>)}
            </div>
            {this.props.data.body.length>0 && this.props.data.body.map((item, index) => {
              return (
                  item.makeChanges && (
                      <Form
                          key={index}
                          {...item}
                      />
                  )
              )
          })}
          </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.getData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUserDataAction, postUserDataAction, addUserAction, editAction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);