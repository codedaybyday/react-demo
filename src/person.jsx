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