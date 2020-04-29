import React from 'react';
import api from "../api";

export default class demo05FetchComApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerData: []
        }
    }

    componentDidMount() {
        api.getChengpin().then(res => res.json()).then(data => {
            console.log('封装公共api：Get', data);
        })

        api.getLogin({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        }).then(res => res.json()).then(data => {
            console.log('封装公共api：Post', data);
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