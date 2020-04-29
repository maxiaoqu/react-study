import React from 'react';
import Demo01AllUi from "./views/Demo01AllUi";
import Demo02AnuUi from "./views/Demo02AnuUi";

function App() {

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

export default App;
