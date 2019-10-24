import React, { Component, Fragment } from "react";
import "./App.css";
import List from "./List"
import Info from "./Info"

class App extends Component {
    state = {
        arr: [],
        dataExists: false,
        loading: false,
        info: {},
    };

    getData = () => {
        this.setState({ loading: true });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resolve) => resolve.json())
            .then((resolve) =>
                this.setState({
                    arr: resolve,
                    dataExists: !this.state.dataExists,
                    loading: false
                })
            )
            .catch((error) => console.log(error));
    };

    removeData = () => {
        this.setState({ arr: [], dataExists: !this.state.dataExists });
    };

    showMore = (id) => {
      let info = {
        title: "",
        body: "",
      }
      this.state.arr.map((item)=>{
        if(item.id === id){
          info.title = item.title;
          info.body = item.body;
          this.setState({info})
        }
      })
    }
    showLess = () => {
      this.setState({info: {}})
    }
    render() {
        return (
          <Fragment>
            <div className="App">
                <button
                    onClick={() => (this.state.dataExists ? this.removeData() : this.getData())}
                >
                    {this.state.loading ? <i className="fas fa-circle-notch"></i> : null} CLICK
                </button>
                <div id="content">
                    {this.state.arr.map((item, index) => {
                        return (
                            <List {...item} key={index} showMore={()=>this.showMore(item.id)}/>
                        );
                    })}
                </div>
            </div>
            {typeof this.state.info.body === "string"? (<Info {...this.state.info} showLess={this.showLess}/>): null}
          </Fragment>
        );
    }
}

export default App;
