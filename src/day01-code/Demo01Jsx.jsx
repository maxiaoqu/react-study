import React from 'react';

export default class Demo01Jsx extends React.Component {
    // 普通的写法
    // render() {
    //     return <h5>Hello, 码小趣</h5>;
    // }

    // 赋值的写法
    // render() {
    //     const name = '码小趣';
    //     const element = <h5>Hello, {name}</h5>;
    //     return element;
    // }

    // 表达式的写法的写法
    render() {
        function formatName(user) {
            return user.firstName + '.' + user.lastName;
        }

        const user = {
            firstName: '码',
            lastName: '小趣'
        };
        const element = (
            <h5>
                Hello, {formatName(user)}!
            </h5>
        );
        return element;
    }
}