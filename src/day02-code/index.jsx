import React from 'react';
import AllUi from './allUi';
import AnuUi from './anuUi';

export default class DemoIndex1 extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <hr/>
                    <li>
                        全局使用Css:
                        <AllUi/>
                    </li>
                    <hr/>
                    <li>
                        按需加载Css:
                        <AnuUi/>
                    </li>
                </ul>
            </div>

        )
    }
}