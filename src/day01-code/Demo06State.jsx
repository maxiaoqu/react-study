import React from 'react';

export default class Demo06State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            flag: true
        }
    }

    increment() {
        // setState
        this.setState({
            count: this.state.count += 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count -= 1
        })
    }

    clickHandler = () => {
        console.log(this);
    }

    changeShowView = () => {
        console.log(this);
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        let showView = this.state.flag ? '我是码小趣' : '我是码大趣'
        return (
            <div>
                <h3>组件的State</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>增加</button>
                <button onClick={this.decrement.bind(this)}>减少</button>
                <button onClick={this.clickHandler}>关于this</button>
                <p>{showView}</p>
                <button onClick={this.changeShowView.bind(this)}>修改码*趣</button>
            </div>
        )
    }
}