import React from 'react';

export default class PorpsDemo extends React.Component {
    render() {
        const {pinying,name} = this.props;
        return (
            <div>从父组件传过来的参数是： {name}({pinying})</div>
        )
    }
}