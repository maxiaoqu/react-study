import React from 'react';

// 在pulic/index.html里引入cdn样式链接
export default class Demo03Cdscss extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary">increment</button>
                <button className="btn btn-success">decrement</button>
            </div>
        )
    }
}