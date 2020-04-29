import React from 'react';

export default class Demo04FetchProxyMock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerData: []
        }
    }

    componentDidMount() {
        /*
        * 开发模式跨域参考:https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
        * 安装依赖：npm install http-proxy-middleware --save
        * 使用时在将根目录的setupProxy.js文件移到src/下：src/setupProxy.js
        * */
        // http://localhost:3100/api/list
        fetch("/apiServe/list")
            .then(res => res.json())
            //.then(res => res.text())
            .then(data => {
                console.log('跨域数据mock', data);
            })
    }

    render() {
        const {bannerData} = this.state;
        return (
            <div>
                报错：Error: SyntaxError: Unexpected token in JSON at position 0、at fetchProxy.jsx:32

                可能是json串的问题
            </div>
        )
    }
}