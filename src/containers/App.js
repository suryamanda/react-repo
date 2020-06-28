import React, {Component} from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;


    this.setState({persons : persons});
  }

  deletePersonHandler = (index) => {
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

render(){
  let persons = null;
  if(this.state.showPersons){
    persons = ( <Persons persons = {this.state.persons}
    clicked = {this.deletePersonHandler}
    changed = {this.nameChangedHandler} />
    );
  }

 return (
      <div className={classes.App}>
        <Cockpit showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.toggleShowPersons}/>
      {persons}
    </div>
    
 );
}
}

export default App;
