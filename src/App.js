import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Stefan', age : 26},
    ],
    otherState : 'Other value'
  }


  switchNameHandler = () => {
    console.log('was clicked!');
    // do not do this this.state.persons[0].name = 'Surya';
    this.setState({persons : [
      { name : 'Surya', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Stefan', age : 26},
    ] })
  }

render(){
 return (
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <button onClick = {this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
      <Person name="Stefan" age = "27"> My Hobbies : Racing</Person>
    </div>
 );
}
}

export default App;
