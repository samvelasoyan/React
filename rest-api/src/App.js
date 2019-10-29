import React, { Component, Fragment } from "react";
import "./App.css";
import Objects from "./Objects";
import Box from "./Box";
import Form from "./Form";

class App extends Component {
    state = {
        body: [],
        edit: false,
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
        });
    };

    getData = () => {
        fetch("http://rest.learncode.academy/api/sam/friends")
            .then((resolve) => resolve.json())
            .then((resolve) => this.setState({ body: resolve.slice(0, 6) }))

            .catch((error) => console.log(error));
    };

    putData = (id) => {
      let arr = this.state.body.filter(item => item.id === id)
        fetch(`http://rest.learncode.academy/api/sam/friends/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(arr[0])
        })
    };
    componentDidMount = () => {
        this.postData();
        setTimeout(this.getData, 500)
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
      this.setState({edit: !this.state.edit})
      let id = event.target.id;
      let body = this.state.body;
        body.map((item) => {
            if (item.id === id) {
               item.makeChanges = !item.makeChanges;
            }
        });
        this.setState({ body });
    }

    confirm = (event) =>{
      let id = event.target.id;      
      this.edit(event)
      this.putData(id)
    }
    discard = (event) => {
        this.getData()
        this.edit(event)
    }
    render = () => {            
        return (
          <Fragment>
            <div className="container" style={this.state.edit ? {opacity: 0} : {opacity: 1}}>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Country</th>
                    <th></th>
                  </tr>
                {this.state.body.map((item, index) => {
                    return (
                        <Box key={index} {...item} edit={this.state.edit? null : (this.edit)}/>
                  )
                })}
                </tbody>
              </table>
            </div>
              {this.state.body.map((item, index) => {
                return(item.makeChanges && (<Form
                    {...item}
                    changeName={this.changeName}
                    changeMail={this.changeMail}
                    changePosition={this.changePosition}
                    changeCountry={this.changeCountry}
                    discard={this.discard}
                    confirm={this.confirm}
                    edit = {this.edit}
                  />))
                })}
            </Fragment>
        );
    };
}
export default App;
