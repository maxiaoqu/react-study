import React from 'react';

export default class StateDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    async increment() {
        // 原生处理
        // this.setState({
        //     count:this.state.count+1
        // },() => {
        //     console.log(this.state.count);
        // })

        // Promise处理
        await this.setStateAsync({count: this.state.count + 1});
        console.log(this.state.count);
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        })
    }

    render() {
        return (
            <div>
                setState同步还是异步问题
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>修改</button>
            </div>
        )
    }
}