import React, { Component } from "react";
import "./App.css";

function List({value, deleteTask, id, completeTask, completed}) {
    return (
        <table className="dropDown">
          <tr className="row">
            <td className="icon">
              <a href="#" onClick={() => completeTask(id)}>
                <i className={`far ${completed? "fa-check-circle": "fa-circle"}`}></i>
              </a>
            </td>
            <td className="txt" style={{color: completed? "green":"black"}}>{value}</td>
            <td className="icon">
              <a href="#" onClick={() => deleteTask(id)}>
                <i className="fas fa-times"></i>
              </a>
            </td>
          </tr>
        </table>
    );
}

class App extends Component {
    state = {
        value: "",
        list: []
    };

    handleSubmit = event => {
        event.preventDefault();
        let list = [
            { value: this.state.value, id: Math.random(), completed: false },
            ...this.state.list
        ];
        this.setState({ value: "", list });
    };

    deleteTask = id => {
        let list = this.state.list.filter(obj => obj.id !== id);
        this.setState({ list });
    };

    completeTask = id => {
        let list = this.state.list.map(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        this.setState({ list });
    };

    handleChange = event => this.setState({ value: event.target.value });

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
                  <div style={{ display: "inline-block" }}>
                    <input type="submit" value=""></input>
                    <a href="#" id="addTask">
                        <i class="fas fa-plus-circle"></i>
                    </a>
                  </div>
                </td>
                <th>
                  <a href="#" id="dropList">
                    <i class="fas fa-bars"></i>
                  </a>
                </th>
              </tr>
            </table>
            {this.state.list.map((item, index) => {
              return (
                <List
                  {...item}
                  // value={item.value}
                  key={index}
                  deleteTask={this.deleteTask}
                  // id={item.id}
                  completeTask={this.completeTask}
                  // completed={item.completed}
                />
              );
            })}
          </div>
        </form>
      );
    }
}

export default App;
