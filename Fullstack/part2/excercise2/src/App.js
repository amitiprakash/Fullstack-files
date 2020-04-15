import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = props => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber,setNewNumber] = useState('');
  const [ filter, setFilter ] = useState('');

  const setFilterValue = (e) =>{
      setFilter(e.target.value);
  }

  const handleNameChange = (e) =>{
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) =>{
    setNewNumber(e.target.value);

  }
  const handleFormSubmit =(e) =>{
    e.preventDefault();
    if(persons.some(person => person.name === newName)){
      alert(`${newName} already exists`);
    }else{
      const per = {name:newName, number:newNumber};
      console.log("here");
      setPersons(persons.concat(per));
    }
  }

  const FilterNames =() =>{
    if(filter === "")
      return persons
    else{
      return persons.filter(person =>{return person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1});
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={filter} onChange={setFilterValue} />
      <h3>Add a Person</h3>
      <PersonForm
        formSubmit={handleFormSubmit}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
        nameValue={newName}
        numberValue={newNumber} 
      />     
      <h2>Numbers</h2>
      <Persons persons={FilterNames()}/>
    </div>
  )
};

export default App;
