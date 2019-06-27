import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>{props.name}
                {props.children}</p>

        </div>
    );
};

export default Person;