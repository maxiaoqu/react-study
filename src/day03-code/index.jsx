import React from 'react';
import FetchGet from "./fetchGet";
import FetchPost from "./fetchPost";
import FetchProxy from "./fetchProxy";
import FetchProxyMock from "./fetchProxyMock";
import FetchComApi from "./fetchComApi";
export default class DemoIndex1 extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <hr/>
                    <li>
                        Fetch Get请求:
                        <FetchGet/>
                    </li>
                    <hr/>
                    <li>
                        Fetch Post请求:
                        <FetchPost/>
                    </li>
                    <hr/>
                    <li>
                        Fetch 跨域问题:
                        <FetchProxy/>
                    </li>
                    <hr/>
                    <li>
                        Fetch 跨域问题（mock）:
                        <FetchProxyMock/>
                    </li>
                    <hr/>
                    <li>
                        Fetch 封装:
                        <FetchComApi/>
                    </li>
                </ul>
            </div>

        )
    }
}