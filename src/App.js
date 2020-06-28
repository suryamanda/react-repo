import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color : ${props => props.alt ? 'red' : 'green'};
    color : white;
    font : inherit;
    border: 1px solid blue;
    padding : 8px;
    cursor : pointer;

    &:hover {
      background-color : ${props => props.alt ? 'yellow' : 'lightgreen'};
      color : black;
  }; 
`

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

  //const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;


    this.setState({persons : persons});
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
      changed = {(event) => this.nameChangedHandler(event, person.id)}
      />
    }
      )};
      </div>
    );

    
  }

   const classes = [];
   if(this.state.persons.length <= 2){
      classes.push('red');
   }
   if(this.state.persons.length <= 1){
     classes.push('bold');

   }


 return (
   
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <p className = {classes.join(' ')}>This is Really working!</p>
      <StyledButton alt = {this.state.showPersons}
      onClick = {this.toggleShowPersons}>Toggle Persons</StyledButton>
      {persons}
    </div>
    
 );
}
}

export default App;
