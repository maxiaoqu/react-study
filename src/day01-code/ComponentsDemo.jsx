import React from 'react';

class Welcome extends React.Component {
    render() {
        return <h5>Hello, {this.props.name}</h5>;
    }
}

export default class ComponentsDemo extends React.Component {
    // 函数组件
    // render() {
    //     function Welcome(props) {
    //         return <h5>Hello, {props.name}</h5>;
    //     }
    //     return <Welcome name='码小趣（函数组件）'></Welcome>
    // }

    // class 组件
    // render() {
    //     return <Welcome name='码小趣（class 组件）'></Welcome>
    // }

    // 函数组件函+class 组件
    render() {
        function Welcomes(props) {
            return <h5>Hello, {props.names}</h5>;
        }
        return (
            <div>
                <Welcome name='码小趣（class 组件）'></Welcome>
                <Welcomes names='码小趣（函数组件）'></Welcomes>
            </div>
        )
    }
}