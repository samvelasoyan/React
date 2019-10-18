import React,{Component} from 'react';
import './App.css';

class List extends Component{
  state = {
    value: ""
  }
  render(){
    return (<table className="dropDown">
            <tr className="row">
              <td className="icon"><a href="#"><i className="far fa-circle"></i><i className="far fa-check-circle"></i></a></td>
              <td className="txt">{this.state.value}</td>
              <td className="icon"><a href="#"><i className="fas fa-times"></i></a></td>
            </tr>
          </table>)
  }
}
class App extends Component {
  renderList(){
    return <List />
  }
  render() {
    return <div id="list">
      <table>
        <tr>
          <th>Tasks</th>
          <td>
            <input type="text" id="createTask" placeholder="create new task"></input>
            <a href="#" id="addTask"><i class="fas fa-plus-circle"></i></a>
          </td>
          <th><a href="#" id="dropList"><i class="fas fa-bars"></i></a></th>
        </tr>
      </table>
    </div>
  };
}

export default App;
