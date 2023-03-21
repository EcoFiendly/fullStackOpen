import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const Person = ({ name, number }) => {
    // console.log(name)
    return (
      <div>{`${name} ${number}`}</div>
    )
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(persons)
    if (!persons.some(e => e.name === newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [filter, setFilter] = useState('')
  
  const filteredPersons = persons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type="text" value={filter} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handlePersonChange} />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {filteredPersons.map(person =>
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </>
    </div>
  )
}

export default App