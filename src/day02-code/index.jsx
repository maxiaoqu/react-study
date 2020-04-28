import React from 'react';
import Demo01AllUi from './Demo01AllUi';
import Demo02AnuUi from './Demo02AnuUi';

export default class DemoIndex1 extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <hr/>
                    <li>
                        全局使用Css:
                        <Demo01AllUi/>
                    </li>
                    <hr/>
                    <li>
                        按需加载Css:
                        <Demo02AnuUi/>
                    </li>
                </ul>
            </div>

        )
    }
}