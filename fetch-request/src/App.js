import React, { Component } from "react";
import "./App.css";

function List({ id, title, body }) {
    return (
        <ul>
            <li><b>id:</b> {id}</li>
            <li><b>title:</b> {title.length > 43 ? `${title.slice(0, 43)}...` : title}</li>
            <li><b>body:</b> {body.slice(0, 43)}...</li>
        </ul>
    );
}

class App extends Component {
    state = {
        arr: [],
        dataExists: false,
        loading: false
    };

    getData = () => {
        this.setState({ loading: true });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resolve) => resolve.json())
            .then((resolve) =>
                this.setState({
                    arr: resolve.slice(0, 4),
                    dataExists: !this.state.dataExists,
                    loading: false
                })
            )
            .catch((error) => console.log(error));
    };

    removeData = () => {
        this.setState({ arr: [], dataExists: !this.state.dataExists });
    };
    render() {
        return (
            <div className="App">
                <button
                    onClick={() => (this.state.dataExists ? this.removeData() : this.getData())}
                >
                    {this.state.loading ? <i className="fas fa-circle-notch"></i> : null} CLICK
                </button>
                <div id="content">
                    {this.state.arr.map((item, index) => {
                        return (
                            <List {...item} key={index}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;
