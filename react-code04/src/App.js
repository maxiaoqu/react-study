import React from 'react';
/**
 * HashRouter:锚点链接
 * BrowserRouter:h5新特性 / history.push   如果上线之后，需要后台做一些处理：重定向处理 404bug
 */
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import Nav from "./components/Nav"
import Demo01Home from "./views/Demo01Home";
import Demo02Mine from "./views/Demo02Mine";
import Demo03UCenter from "./views/Demo03UCenter";
import Demo05Test from "./views/Demo05Test";
import Demo06Shop from "./views/Demo06Shop";
import Demo08Book from "./views/Demo08Book";
import Demo09JavaBook from "./views/Demo09JavaBook";
import Demo10WEBBook from "./views/Demo10WEBBook";
import Demo04NotFound from "./views/Demo04NotFound";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                {/*Switch：只加载一个页面*/}
                <Switch>
                    {/*exact:精准匹配*/}
                    {/*<Route exact path="/home" component={Demo01Home}></Route>*/}
                    <Route exact path="/" component={Demo01Home}></Route>

                    {/*exact:精准匹配,strict:更加精准的匹配规则（'xxx/asd/'===>>'xxx/asd'）*/}
                    {/*点击跳转:Demo02Mine、Demo07MineDemo*/}
                    <Route strict exact path="/mine" component={Demo02Mine}></Route>
                    {/*Redirect：路由重定向*/}
                    <Redirect from='/hellomine' to='/mine' />

                    {/*/mine/ucenter  包含了 /mine*/}
                    {/*<Route strict exact path="/mine/ucenter/" component={Demo03UCenter}></Route>*/}
                    {/*路由跳转携带参数*/}
                    {/*<Route strict exact path="/mine/ucenter/:id" component={Demo03UCenter}></Route>*/}
                    {/*路由跳转携带多个参数，可传可不传时加"？"*/}
                    <Route strict exact path="/mine/ucenter/:id?/:name?" component={Demo03UCenter}></Route>
                    {/*不增加组件的写法*/}
                    {/* <Route path="/test" render={ () => <div>Hello Test</div> }></Route> */}
                    <Route path="/test" render={ (props) => <Demo05Test {...props} name="你好"/> }></Route>

                    {/*假如没登陆，要付款提示登陆的效果*/}
                    {/*Prompt：离开前确认*/}
                    <Route path="/shop" component={ Demo06Shop }></Route>

                    {/*路由嵌套*/}
                    {/* <Route path="/book" component={ Demo08Book }></Route> */}
                    <Demo08Book>
                        <Switch>
                            <Route path="/book/javabook" component={ Demo09JavaBook}></Route>
                            <Route path="/book/webbook" component={ Demo10WEBBook}></Route>
                        </Switch>
                    </Demo08Book>

                    {/*404页面：一定要放在最后*/}
                    <Route component={ Demo04NotFound }></Route>

                </Switch>
            </Router>
        </div>
    )
}

export default App;
