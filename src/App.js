import React, {Component} from 'react';
import Person from "./Person/Person";
import './App.css'

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
        return (
            <div className="App">
                <h1>Practice Project </h1>
                <button onClick={this.switchNameHandle.bind(this, "WTF")}>Switch Name</button>
                <Person name={this.state.persons[1].name}
                        click={this.switchNameHandle.bind(this, "Hello")}
                        changed={this.nameChangeHandler}> Welcome</Person>
            </div>
        );
    }
}

export default App_old;