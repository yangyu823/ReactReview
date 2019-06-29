import React from 'react';
import Radium from 'radium'

const Person = (props) => {
    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    };
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.age}
                {props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default Radium(Person);