## 验证问题

在此处手动修改counter的值会不会触发Person组件的更新？
Person内部的counter属性是从redux中获取的
见代码

about组件
```
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Person from './person';

const About = (props) => {
    const {id} = useParams('id');
    const [name, setName] = useState('mike');

    useEffect(() => {
        // setName(name + '1')
        props.dispatch({
            type: 'INCREMENT'
        });
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
        // 在此处手动修改counter的值会不会触发Person组件的更新？
        // Person内部的counter属性是从redux中获取的
        <Person id={id} name={name} counter={Math.random()} /></div>);
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
```

person组件
```
import React from 'react';
import { connect } from 'react-redux';
// import PersonContent from './personContent';

const Person = (props) => {
    const {id, name, counter, dispatch} = props;
    console.log(props);
    console.log('person render');

    const handleClick = () => {
        dispatch({
            type: 'INCREMENT'
        });
    };
    return (<div>{id}
        计数器：{counter}<br />
        <button onClick={handleClick}>点击计算</button>
    </div>);
};
// counter 是从redux里面获取
// 尝试在外层组件里面手动修改counter的值 看是否能触发更新
// 结论是：并不会。外层传过来的connter并不是覆盖redux中的counter，内部的counter
export default connect(state => {
    return {
        counter: state
    };
}, (dispatch) => {
    return {
        dispatch
    };
})(Person);
```

## 结论
不会 外面手动传的counter会在connect里面被替换成redux里面的counter

替换大概是这样
```
connect = (mapStateToProps, mapDispatchToProps) => (Component) => (props) => {
    // mapStateToProps写在后面会替换props中的属性
    return (<Component {...props} {...mapStateToProps}/>);
};
```

有空看看react-redux代码