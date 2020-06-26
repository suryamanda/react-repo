import React, {Component} from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
class App extends Component {

  state = {
    name : 'Surya'
  }

 updateName = event => {
this.setState({
name : event.target.value
}
);
  };

  render(){
    return(
      <div className = "App">
        <p>This is test!</p>
        <UserInput changed = {this.updateName} name = {this.state.name}/>
      <UserOutput  name={this.state.name}/>
      <UserOutput  name="Satya"/>
      </div>
    );
  }

}

export default App;
