import React from 'react';
import Demo01FetchGet from "./views/Demo01FetchGet";
import Demo02FetchPost from "./views/Demo02FetchPost";
import Demo03FetchProxy from "./views/Demo03FetchProxy";
import Demo04FetchProxyMock from "./views/Demo04FetchProxyMock";
import Demo05FetchComApi from "./views/Demo05FetchComApi";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <hr/>
                    <li>
                        Fetch Get请求:
                        <Demo01FetchGet/>
                    </li>
                    <hr/>
                    <li>
                        Fetch Post请求:
                        <Demo02FetchPost/>
                    </li>
                    <hr/>
                    <li>
                        Fetch 跨域问题:
                        <Demo03FetchProxy/>
                    </li>
                    <hr/>
                    <li>
                        Fetch 跨域问题（mock）:
                        <Demo04FetchProxyMock/>
                    </li>
                    <hr/>
                    <li>
                        Fetch 封装:
                        <Demo05FetchComApi/>
                    </li>
                </ul>
            </div>
        )
    }
}
