import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
render(){
 return (
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <Person person="Max" age = "28"/>
      <Person person="Manu" age = "30"/>
      <Person person="Stefan" age = "27"> My Hobbies : Racing</Person>
    </div>
 );
}
}

export default App;
