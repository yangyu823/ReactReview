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
        otherState: 'Some value',
        showPersons: false
    };

    // switchNameHandle = (newName) => {
    //     // console.log("Been Clicked")
    //     this.setState({
    //         persons: [
    //             {name: newName, age: 50},
    //             {name: newName, age: 50},
    //             {name: newName, age: 50}
    //         ]
    //     });
    //     console.log(this.state)
    // };
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Nick', age: 10},
                {name: event.target.value, age: 20},
                {name: 'Lucy', age: 30}
            ]
        })
    };
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}/>
                        }
                    )}
                    {/*<Person name={this.state.persons[0].name}*/}
                    {/*        age={this.state.persons[0].age}/>*/}

                    {/*<Person name={this.state.persons[1].name}*/}
                    {/*        age={this.state.persons[1].age}*/}
                    {/*        click={this.switchNameHandle.bind(this, "Hello")}*/}
                    {/*        changed={this.nameChangeHandler}> Welcome</Person>*/}
                    {/*<Person name={this.state.persons[2].name}*/}
                    {/*        age={this.state.persons[2].age}/>*/}
                </div>
            )
        }
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
                {/*<button style={style} onClick={this.switchNameHandle.bind(this, "WTF")}>Switch Name</button>*/}
                <button style={style} onClick={this.togglePersonHandler}>Show Detail</button>
                {persons}
            </div>
        );
    }


}

export default App_old;