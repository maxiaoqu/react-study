import React from 'react';

export default class FetchProxy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerData: []
        }
    }

    componentDidMount() {
        /*
        * 开发模式跨域参考:https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
        * 在package.json文件里添加："proxy": "http://tingapi.ting.baidu.com",
        * */
        fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
            .then(res => res.json())
            .then(data => {
                console.log('跨域数据', data);
            })
            .catch(error => {
                console.log(new Error(error));
            })
    }

    render() {
        const {bannerData} = this.state;
        return (
            <div>
                使用时在package.json下配置："proxy": "http://tingapi.ting.baidu.com"
            </div>
        )
    }
}