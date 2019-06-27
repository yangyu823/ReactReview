import React, {Component} from 'react';
import Person from "./Person/Person";
import './App.css'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Maxx', age: 16},
            {name: 'Maxxx', age: 20},
        ],
        otherState: 'Some value'
    };

    switchNameHandle = () => {
        // console.log("Been Clicked")
        this.setState({
            persons: [
                {name: "Maxssss", age: 50},
                {name: "Maxssss", age: 50},
                {name: "Maxssss", age: 50}
            ]


        })
    };


    render() {
        return (
            <div className="App">
                <h1>Practice Project </h1>
                <button onClick={this.switchNameHandle}>Switch Name</button>
                <Person name={this.state.persons[1].name}/>
                <Person name='Yu'> Welcome</Person>
            </div>
        );
    }
}

export default App;