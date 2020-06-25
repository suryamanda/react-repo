import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons : [
      { name : 'Maxi', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Stefan', age : 26},
    ]
  }
  );

  // we can have as many state objects as we need
  const [otherState, setOtherState] = useState('Some Other value');

  const switchNameHandler = () => {
    setPersonsState({persons : [
      { name : 'Surya', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Stefan', age : 26},
    ]
  });
  setOtherState(
    'new Other state'
  );
  };
  
  return (
      <div className="App">
      <h1>Hi, I'm a react app</h1>
      <button onClick = {switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age = {personsState.persons[2].age}/>
  <Person name="Stefan" age = "27"> {otherState}</Person>
    </div>
 );

}

export default App;



