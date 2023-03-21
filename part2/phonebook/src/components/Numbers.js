import Person from './Person'

const Numbers = ({ filteredPersons }) => {
    return (
        <>
            {filteredPersons.map(person =>
            <Person key={person.id} name={person.name} number={person.number} />
            )}
        </>
    )
}

export default Numbers