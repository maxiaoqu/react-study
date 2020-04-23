import React from 'react';
import AllUi from './allUi';
import AnxuUi from './AnxuUi';

export default class DemoIndex1 extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <hr/>
                    <li>
                        全局使用Css:
                        <AllUi></AllUi>
                    </li>
                    <hr/>
                    <li>
                        按需加载Css:
                        <AnxuUi></AnxuUi>
                    </li>
                    <hr/>
                    <li>
                        条件渲染组件:

                    </li>
                </ul>
            </div>

        )
    }
}