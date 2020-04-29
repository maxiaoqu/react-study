import React from 'react';

export default class Demo08Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log(111, "componentWillMount", "在组件渲染之前执行");
    }

    componentDidMount() {
        console.log(222, "componentDidMount", '在组件渲染之后执行');
    }

    shouldComponentUpdate() {
        console.log(333, "shouldComponentUpdate", '返回true和false，true代表允许改变，false代表不允许改变');
        return true;
    }

    componentWillUpdate() {
        console.log(444, "componentWillUpdate", '数据在改变之前执行(state,props)');
    }

    componentDidUpdate() {
        console.log(555, "componentDidUpdate", '数据修改完成(state,props)');
    }

    componentWillReceiveProps() {
        console.log(666, "componentWillReceiveProps", 'props发生改变执行');
    }

    componentWillUnmount() {
        console.log(777, "componentWillUnmount", '组件卸载前执行');
    }

    // 改变state.count
    changeHandler = () => {
        this.setState({
            count: this.state.count += 1
        })
    }

    // 调用父组件的方法
    clickChange = () => {
        this.props.clickChanges('我是子组件的数据');
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                生命周期函数:{count} - {this.props.title}
                <button onClick={this.changeHandler}>修改</button>
                <button onClick={this.clickChange}>修改title</button>
            </div>
        )
    }
}