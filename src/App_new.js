import React, {useState} from 'react';
import './App.css'
import Person from './Person/Person'

const App_new = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Maxx', age: 16},
            {name: 'Maxxx', age: 20},
        ],

    });
    // console.log(otherState);

    // const [otherState, SetOtherState] = useState('Some other value');

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: "Maxssss", age: 50},
                {name: "Maxssss", age: 50},
                {name: "Maxssss", age: 50}
            ],
            // otherState: personsState.otherState
        });
        console.log(personsState)
    };

    return (
        <div className="App">
            <h1>React Project</h1>
            <button onClick={switchNameHandler}>Switch Button</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
        </div>

    );
};

export default App_new;