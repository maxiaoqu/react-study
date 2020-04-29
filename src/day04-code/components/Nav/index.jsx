import React from "react"
import { Link,NavLink } from "react-router-dom";
import "./style.css"
import WEBBook from "../../pages/Demo10WEBBook";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/*<link to='/home'>Home页面</link>*/}
                        {/* <a href="#/home">Home页面</a> */}

                        {/*activeClassName：把默认的active改成你自己的名字*/}
                        {/*activeStyle：直接写样式，注意：双括号*/}
                        <NavLink activeClassName="selected" activeStyle={{ color:'red' }} exact to="/">Home页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/hellomine">路由重定向mine页面</NavLink>
                    </li>
                    <li>
                        {/*<link to='/mine'>Mine页面</link>*/}
                        {/* <a href="#/mine">Mine页面</a> */}

                        {/* <NavLink activeClassName="selected" exact to="/mine">Mine页面</NavLink> */}
                        <NavLink
                            activeClassName="selected"
                            exact
                            to={{
                                pathname:"/mine",
                                search: "?name=name&age=18",
                                hash: "#the-hash",
                                state: { flag: 'flag' } // 隐形传递参数
                            }}
                        >Mine页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/mine/ucenter/1005/ime">UCenter页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/test">test页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/shop">shop页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/book/webbook">WEBBook页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/book/javabook">JavaBook页面</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}