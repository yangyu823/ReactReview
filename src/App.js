import React, {Component} from 'react';
import Person from "./Person/Person";
import './App.css'
import './Person/Person.css'

class App_old extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Maxx', age: 16},
            {name: 'Maxxx', age: 20},
        ],
        otherState: 'Some value'
    };

    switchNameHandle = (newName) => {
        // console.log("Been Clicked")
        this.setState({
            persons: [
                {name: newName, age: 50},
                {name: newName, age: 50},
                {name: newName, age: 50}
            ]
        });
        console.log(this.state)
    };
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Nick', age: 10},
                {name: event.target.value, age: 20},
                {name: 'Lucy', age: 30}
            ]
        })
    };


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Practice Project </h1>
                <button style={style} onClick={this.switchNameHandle.bind(this, "WTF")}>Switch Name</button>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>

                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandle.bind(this, "Hello")}
                        changed={this.nameChangeHandler}> Welcome</Person>
                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>

            </div>
        );
    }
}

export default App_old;