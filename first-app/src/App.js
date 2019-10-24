import React, { Component } from "react";
import "./App.css";
import List from "./List"

class App extends Component {
    state = {
        value: "",
        list: [],
        completed: false,
        opened: true,
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.value !== "") {
          let list = [{ value: this.state.value, id: Date.now(), completed: this.state.completed }, ...this.state.list];
          this.setState({
              list: list,
              value: ""
          });}
    };

    deleteTask = (id) => {
        let list = this.state.list.filter((item) => item.id !== id);
        this.setState({ list });
    };

    completeTask = (id) => {
        let list = this.state.list
        list.map((item) => {
              if(item.id === id){
              item.completed = !item.completed
          }
        })
        this.setState({ list });
    };

    openList = () => {
      this.setState({opened: !this.state.opened})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div id="list">
                    <table>
                        <tr>
                            <th>Tasks</th>
                            <td>
                                <input
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    type="text"
                                    id="createTask"
                                    placeholder="create new task"
                                ></input>
                                <input type="submit" value="" />
                                <a href="#" id="addTask">
                                    <i class="fas fa-plus-circle"></i>
                                </a>
                            </td>
                            <th>
                                <a href="#" id="dropList" onClick={()=>this.openList()}>
                                    <i className="fas fa-bars"></i>
                                </a>
                            </th>
                        </tr>
                    </table>
                    <div  id="items" className={`dropDown ${this.state.opened? "drop" : ""}`}>
                        <table>
                            {this.state.list.map((item, index) => {
                                return (
                                    <List
                                        {...item}
                                        key={index}
                                        // value={item.value}
                                        // id={item.id}
                                        deleteTask={() => this.deleteTask(item.id)}
                                        completeTask={() => this.completeTask(item.id)}
                                        // completed={item.completed}
                                    />
                                );
                            })}
                        </table>
                    </div>
                </div>
            </form>
        );
    }
}

export default App;
