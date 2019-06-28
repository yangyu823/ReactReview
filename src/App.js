import React, {Component} from 'react';
import Person from "./Person/Person";
import './App.css'
import './Person/Person.css'

class App_old extends Component {
    state = {
        persons: [
            {id: "sdfsdfsdf", name: 'Max', age: 28},
            {id: "ssdfsdf", name: 'Maxx', age: 16},
            {id: "sdfsdff", name: 'Maxxx', age: 20},
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
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});

        // this.setState({
        //     persons: [
        //         {id: "sdfsdfsdf", name: 'Nick', age: 10},
        //         {id: "sdfsdf", name: event.target.value, age: 20},
        //         {id: "sdfsddf", name: 'Lucy', age: 30}
        //     ]
        // })
    };
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                change={(event) => this.nameChangeHandler(event, person.id)}

                            />
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
            );
            style.backgroundColor = 'red'
        }
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