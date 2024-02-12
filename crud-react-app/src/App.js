import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState({ name: '' });

    useEffect(() => {
        axios.get('/api/persons')  // Używamy względnej ścieżki, proxy zadziała w trybie deweloperskim
            .then(response => setPersons(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleInputChange = (e) => {
        setNewPerson({ name: e.target.value });
    };

    const handleAddPerson = () => {
        axios.post('/api/persons', newPerson)  // Używamy POST, ponieważ dodajemy nową osobę
            .then(response => {
                setPersons([...persons, response.data]);
                setNewPerson({ name: '' });
            })
            .catch(error => console.error(error));
    };

    const handleDeletePerson = (id) => {
        axios.delete(`/api/persons/${id}`)
            .then(() => setPersons(persons.filter(person => person.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>CRUD App with React and Spring Boot</h1>
            <ul>
                {persons.map(person => (
                    <li key={person.id}>
                        {person.name}
                        <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newPerson.name} onChange={handleInputChange} />
            <button onClick={handleAddPerson}>Add Person</button>
        </div>
    );
}

export default App;
