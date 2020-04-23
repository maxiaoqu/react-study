import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // 一般放在app.js处

export default class allUi extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </div>
        )
    }
}