import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Stefan', age : 26},
    ],
    otherState : 'Other value',
    showPersons : false
  }


  switchNameHandler = (newName) => {
    console.log('was clicked!');
    // do not do this this.state.persons[0].name = 'Surya';
    this.setState({persons : [
      { name : newName, age : 28},
      { name : 'Manu', age : 29},
      { name : 'Stefan', age : 26},
    ] });
  };

  nameChangedHandler = (event) => {
    this.setState({persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 29},
      { name : event.target.value, age : 26}
    ] });
  }

  toggleShowPersons = () => {
    console.log(this.state);
    this.setState({
      showPersons: !this.state.showPersons
    }
    );
    console.log(this.state);
  }

//we can pass method references as params
render(){

  const style = {
    backgroundColor : 'white',
    font : 'inherit',
    border: '1px solid blue',
    padding : '8px',
    cursor : 'pointer'
  };

  let persons = null;

  if(this.state.showPersons){
    persons = (
<div>
      <Person
       name={this.state.persons[0].name}
       age = {this.state.persons[0].age}/>
      <Person
       name={this.state.persons[1].name} 
       age = {this.state.persons[1].age}/>
      <Person 
      name={this.state.persons[2].name} 
      age = {this.state.persons[2].age}
      click = {this.switchNameHandler.bind(this, 'Maximillian')}
      changed = {this.nameChangedHandler}
      />
      </div>
    );
  }

 return (
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <button 
      style={style}
      onClick = {this.toggleShowPersons}>Toggle Persons</button>
      {persons}
    </div>
 );
}
}

export default App;
