import React from 'react';
import {DatePicker} from 'antd';// babel-plugin-import 会帮助你加载 JS 和 CSS

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class AnxuUi extends React.Component {
    render() {
        return (
            <div>
                <DatePicker onChange={onChange}/>
            </div>
        )
    }
}