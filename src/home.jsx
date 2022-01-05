import React from 'react';
import {Link, useLinkClickHandler} from 'react-router-dom';

const Home = () => {
    const handleClick = useLinkClickHandler('/about/111');
    return (<div>
        home<br />
        <button onClick={handleClick}>点击跳转到about</button>
    </div>);
};

export default Home;
