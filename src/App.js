import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { id: '1', name : 'Max', age : 28},
      { id: '2', name : 'Manu', age : 29},
      { id: '3', name : 'Stefan', age : 26},
    ],
    otherState : 'Other value',
    showPersons : false
  }

  nameChangedHandler = (event) => {
    this.setState({persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 29},
      { name : event.target.value, age : 26}
    ] });
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    //this is the best way to immutability
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons : persons});
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
    {this.state.persons.map((person, index) => {
     return <Person
      click = {() => this.deletePersonHandler(index)}
      name={person.name}
      age = {person.age}
      key = {person.id}
      />
    }
      )};
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
