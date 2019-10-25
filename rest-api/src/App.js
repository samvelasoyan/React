import React, { Component } from "react";
import "./App.css";
import Objects from "./Objects";
import Box from "./Box";
import Form from "./Form";

class App extends Component {
    state = {
        body: [],
    };
    postData = () => {
        Objects().map((item) => {
            fetch("http://rest.learncode.academy/api/sam/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then((response) => response.json()) // response.json() returns a promise
                .then((response) => console.log(response));
        });
    };

    getData = () => {
        fetch("http://rest.learncode.academy/api/sam/friends")
            .then((resolve) => resolve.json())
            .then((resolve) => this.setState({ body: resolve.slice(0, 6) }))

            .catch((error) => console.log(error));
    };

    putData = (id) => {
        fetch(`http://rest.learncode.academy/api/sam/friends/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ name: "Batman", age: "infinite" })
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    componentDidMount = () => {
        this.postData();
        this.getData();
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
      let id = event.target.id;
      let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
               item.makeChanges = !item.makeChanges;
            }
        });
        this.setState({ body });
    }

    render = () => {
        return (
            <div className="container">
                {this.state.body.map((item, index) => {
                    return (
                      item.makeChanges? (
                        <Form
                            {...item}
                            key={index}
                            changeName={this.changeName}
                            changeMail={this.changeMail}
                            changePosition={this.changePosition}
                            changeCountry={this.changeCountry}
                            edit={this.edit}
                        />
                    ) : (
                        <Box {...item} key={index} edit={this.edit}/>
                    )
                  )
                })}
            </div>
        );
    };
}
export default App;
