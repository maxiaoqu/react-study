import React from 'react';

export default class Demo01FetchGet extends React.Component {

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
        // fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then(res => {
        //     return res.json();
        // }).then(data => {
        //     console.log('接口get返回:', data)
        // })

        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
            .then(res => res.json())
            .then(data => {
                console.log('接口get返回:', data);
                this.setState({
                    bannerData: data.banner
                })
            })
    }

    render() {
        const {bannerData} = this.state;
        return (
            <div>
                {
                    bannerData.length > 0 ?
                        <ul>
                            {
                                bannerData.map((item, index) => {
                                    return <li key={index}>{item.title}</li>
                                })
                            }
                        </ul>
                        : <div>暂无数据</div>
                }
            </div>
        )
    }
}