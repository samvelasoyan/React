import React, { Component } from "react";
import "./App.css";
import Text from './Text'
import Form from './Form'
import Background from './images/image-4.jpg'
import Logo from './images/logo-light.png'

export default class App extends Component {
  state = {
    signUp: true,
  }
  changeTemplate = () => {
    this.setState({signUp: !this.state.signUp})
  }
    render() {
        return (
          <div id="template">
              <div className="pic-container" style={this.state.signUp? {transform: "translateX(0%)"}: {transform: "translateX(100%)"}}>
                  <div className="first" style={{background: `url(${Background}) no-repeat`, backgroundSize: "cover"}}></div>
                  <div className="second"></div>
                  <div className="third">
                    <div className="logo" style={{background: `url(${Logo}) no-repeat`, backgroundSize: "contain"}}></div>
                    <Text {...this.state} onClick={this.changeTemplate}/>
                  </div>
              </div>
              <div className="form-container" style={this.state.signUp? {transform: "translateX(0%)"}: {transform: "translateX(-100%)"}}>
                  <Form {...this.state} onClick={this.changeTemplate}/>
              </div>
          </div>
        );
    }
}
