import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Person from './person';

const About = (props) => {
    const {id} = useParams('id');
    const [name, setName] = useState('mike');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // setName(name + '1')
        // props.dispatch({
        //     type: 'INCREMENT'
        // });
        setCounter(counter + 9);
    }, [id]);

    return (<div>about
        <br />
        跳转到<Link to="/about/2222">about1</Link>
        <br />
        跳转到<Link to="/about/3333">about2</Link>
        <br />
        跳转到<Link to="/about/4444">about3</Link>
        <br />
        跳转到<Link to="/about/5555">about4</Link>
        <Person id={id} name={name} counter={counter} /></div>);
};

export default connect(state => {
    return {
        counter: state
    };
}, (dispatch) => {
    return {
        dispatch
    };
})(About);