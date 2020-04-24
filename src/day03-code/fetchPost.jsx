import React from 'react';
import qs from 'querystring';

export default class FetchPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerData: []
        }
    }

    componentDidMount() {
        /*
        * fetch：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
        * */
        fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www=from-urlencoded',
                'Accept': 'application/json,text/plain,*/*'
            },
            // 错误的
            // body: {
            //     user_id: "iwen@qq.com",
            //     password: "iwen123",
            //     verification_code: 'crfvw'
            // }

            //正确的
            // body: "user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"

            // qs解析
            // querystring: http://nodejs.cn/api/querystring.html
            body: qs.stringify({
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: 'crfvw'
            })
        }).then(res => res.json()).then(data => {
            console.log('接口Post返回:', data);
            this.setState({
                bannerData: data.banner
            })
        })
    }

    render() {
        const {bannerData} = this.state;
        return (
            <div>

            </div>
        )
    }
}