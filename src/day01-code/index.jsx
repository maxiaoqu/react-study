import React from 'react';
import Demo01Jsx from './Demo01Jsx';
import Demo02Components from './Demo02Components';
import Demo04Porps from "./Demo04Porps";
import Demo05PropTypes from "./Demo05PropTypes";
import Demo06State from "./Demo06State";
import SetstateDemo from "./Demo07Setstate";
import Demo08Lifecycle from "./Demo08Lifecycle";
import Demo03IfComponents from "./Demo03IfComponents";
import Demo09ListKeys from "./Demo09ListKeys";
import Demo10From from "./Demo10From";
import Demo11FromRef from "./Demo11FromRef";
import Demo12Ref from "./Demo12Ref";
import ParentIndex from "./components/ParentIndex";
import Demo13Inheritance from "./Demo13Inheritance";

export default class DemoIndex1 extends React.Component {
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
                        <SetstateDemo/>
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
                        状态提升:
                        <ParentIndex/>
                    </li>
                    <hr/>
                    <li>
                        组合 vs 继承:
                        <Demo13Inheritance>
                            <span>这里插入一条内容，类似于：vue的solt</span>
                        </Demo13Inheritance>
                    </li>
                    <hr/>

                </ul>
            </div>

        )
    }
}