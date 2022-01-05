import React from 'react';

const Person = ({id}) => {
    console.log('person render');
    return (<div>{id}</div>);
};

export default Person;