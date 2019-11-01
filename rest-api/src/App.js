import React, { Component, Fragment } from "react";
import "./App.css";
import Objects from "./Objects";
import Box from "./Box";
import Form from "./Form";

class App extends Component {
    state = {
        body: Objects(),
        edit: false
    };
    postData = () => {
        this.state.body.map((item) => {
            fetch("http://rest.learncode.academy/api/sam/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
        });
    };

    getData = (x) => {
        fetch("http://rest.learncode.academy/api/sam/friends")
            .then((resolve) => resolve.json())
            .then((resolve) => this.setState({ body: resolve.slice(-this.state.body.length) }))

            .catch((error) => console.log(error));
    };

    putData = (id) => {
        let arr = this.state.body.filter((item) => item.id === id);
        fetch(`http://rest.learncode.academy/api/sam/friends/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(arr[0])
        });
    };

    changeName = (event) => {
        let id = event.target.id;
        let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
                item.fullName = event.target.value;
            }
        });
        this.setState({ body });
    };

    changeMail = (event) => {
        let id = event.target.id;
        let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
                item.email = event.target.value;
            }
        });
        this.setState({ body });
    };

    changePosition = (event) => {
        let id = event.target.id;
        let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
                item.position = event.target.value;
            }
        });
        this.setState({ body });
    };

    changeCountry = (event) => {
        let id = event.target.id;
        let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
                item.country = event.target.value;
            }
        });
        this.setState({ body });
    };

    edit = (event) => {
        this.setState({ edit: !this.state.edit });
        let id = event.target.id;
        let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
                item.makeChanges = !item.makeChanges;
            }
        });
        this.setState({ body });
    };

    addUser = () => {
        let newItem = {
            fullName: "",
            email: "",
            position: "",
            country: "",
            makeChanges: false,
        };
        let body = this.state.body;
        body.push(newItem);
        this.setState({ body });
        this.postData();
        this.getData();
        
    };

    confirm = (event) => {
        let id = event.target.id;
        this.edit(event);
        this.putData(id);
    };
    discard = (event) => {
        this.getData();
        this.edit(event);
    };
    remove = (e) => {
        let id = e.target.id;
        let body = this.state.body.filter((item) => item.id !== id);
        this.setState({ body });
    };

    componentDidMount = () => {
        this.postData();
        setTimeout(this.getData, 500);
    };

    render = () => {
        return (
            <Fragment>
                <div
                    className="container"
                    style={this.state.edit ? { opacity: 0 } : { opacity: 1 }}
                >
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Position</th>
                                <th>Country</th>
                                <th>
                                    <span
                                        id={this.state.body[this.state.body.length - 1].id}
                                        onClick={this.addUser}
                                    >
                                        <i
                                            id={this.state.body[this.state.body.length - 1].id}
                                            className="fas fa-user-plus"
                                        ></i>
                                    </span>
                                </th>
                            </tr>
                            {this.state.body.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        {...item}
                                        edit={this.edit}
                                        remove={this.remove}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {this.state.body.map((item, index) => {
                    return (
                        item.makeChanges && (
                            <Form
                                key={index}
                                {...item}
                                changeName={this.changeName}
                                changeMail={this.changeMail}
                                changePosition={this.changePosition}
                                changeCountry={this.changeCountry}
                                discard={this.discard}
                                remove={this.remove}
                                confirm={this.confirm}
                                edit={this.edit}
                            />
                        )
                    );
                })}
            </Fragment>
        );
    };
}
export default App;
