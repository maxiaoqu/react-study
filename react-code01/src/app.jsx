import React from "react"
import ParentIndex from "./components/ParentIndex";
import Demo01Jsx from "./views/Demo01Jsx";
import Demo02Components from "./views/Demo02Components";
import Demo03IfComponents from "./views/Demo03IfComponents";
import Demo04Porps from "./views/Demo04Porps";
import Demo05PropTypes from "./views/Demo05PropTypes";
import Demo06State from "./views/Demo06State";
import Demo07Setstate from "./views/Demo07Setstate";
import Demo08Lifecycle from "./views/Demo08Lifecycle";
import Demo09ListKeys from "./views/Demo09ListKeys";
import Demo10From from "./views/Demo10From";
import Demo11FromRef from "./views/Demo11FromRef";
import Demo12Ref from "./views/Demo12Ref";
import Demo13Inheritance from "./views/Demo13Inheritance";

// 用类的形式创建组件，Hook形式
class App extends React.Component{

    constructor() {
        super();
        this.state = {
            title: "父组件穿传的标题"
        }
    }
    // 子组件调用父组件
    clickChange = (data) => {
        this.setState({
            title: data
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <hr/>
                    <li>
                        JSX 简介:
                        <Demo01Jsx/>
                    </li>
                    <hr/>
                    <li>
                        组件:
                        <Demo02Components/>
                    </li>
                    <hr/>
                    <li>
                        条件渲染组件:
                        <Demo03IfComponents/>
                    </li>
                    <hr/>
                    <li>
                        组件Porps:
                        <Demo04Porps name='码小趣' pinying='maxiaoqu'/>
                    </li>
                    <hr/>
                    <li>
                        PropTypes 进行类型检查:
                        <Demo05PropTypes title="码小趣"/>
                    </li>
                    <hr/>
                    <li>
                        State:
                        <Demo06State/>
                    </li>
                    <hr/>
                    <li>
                        setState更新是同步还是异步:
                        <Demo07Setstate/>
                    </li>
                    <hr/>
                    <li>
                        生命周期:
                        <Demo08Lifecycle title={this.state.title} clickChanges={this.clickChange}/>
                    </li>
                    <hr/>
                    <li>
                        列表 & Key:
                        <Demo09ListKeys/>
                    </li>
                    <hr/>
                    <li>
                        表单--受控组件:
                        <Demo10From/>
                    </li>
                    <hr/>
                    <li>
                        表单--非受控组件:
                        <Demo11FromRef/>
                    </li>
                    <hr/>
                    <li>
                        Refs操作DOM:
                        <Demo12Ref/>
                    </li>
                    <hr/>
                    <li>
                        组合 vs 继承:
                        <Demo13Inheritance>
                            <span>这里插入一条内容，类似于：vue的solt</span>
                        </Demo13Inheritance>
                    </li>
                    <hr/>
                    <li>
                        状态提升:
                        <ParentIndex/>
                    </li>

                </ul>
            </div>

        )
    }
}

export default App