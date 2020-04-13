import React from 'react';
import JsxDemo from './JsxDemo';
import ComponentsDemo from './ComponentsDemo';
import PorpsDemo from "./PorpsDemo";
import PropTypesDemo from "./PropTypesDemo";
import StateDemo from "./StateDemo";
import SetstateDemo from "./SetstateDemo";
import LifecycleDemo from "./LifecycleDemo";
import IfComponentsDemo from "./IfComponentsDemo";
import ListKeysDemo from "./ListKeysDemo";
import FromDemo from "./FromDemo";
import FromRefDemo from "./FromRefDemo";
import RefDemo from "./RefDemo";
import ParentIndex from "./components/ParentIndex";
import InheritanceDemo from "./InheritanceDemo";

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
                        <JsxDemo/>
                    </li>
                    <hr/>
                    <li>
                        组件:
                        <ComponentsDemo/>
                    </li>
                    <hr/>
                    <li>
                        条件渲染组件:
                        <IfComponentsDemo/>
                    </li>
                    <hr/>
                    <li>
                        组件Porps:
                        <PorpsDemo name='码小趣' pinying='maxiaoqu'/>
                    </li>
                    <hr/>
                    <li>
                        PropTypes 进行类型检查:
                        <PropTypesDemo title="码小趣"/>
                    </li>
                    <hr/>
                    <li>
                        State:
                        <StateDemo/>
                    </li>
                    <hr/>
                    <li>
                        setState更新是同步还是异步:
                        <SetstateDemo/>
                    </li>
                    <hr/>
                    <li>
                        生命周期:
                        <LifecycleDemo title={this.state.title} clickChanges={this.clickChange}/>
                    </li>
                    <hr/>
                    <li>
                        列表 & Key:
                        <ListKeysDemo/>
                    </li>
                    <hr/>
                    <li>
                        表单--受控组件:
                        <FromDemo/>
                    </li>
                    <hr/>
                    <li>
                        表单--非受控组件:
                        <FromRefDemo/>
                    </li>
                    <hr/>
                    <li>
                        Refs操作DOM:
                        <RefDemo/>
                    </li>
                    <hr/>
                    <li>
                        状态提升:
                        <ParentIndex/>
                    </li>
                    <hr/>
                    <li>
                        组合 vs 继承:
                        <InheritanceDemo>
                            <span>这里插入一条内容，类似于：vue的solt</span>
                        </InheritanceDemo>
                    </li>
                    <hr/>

                </ul>
            </div>

        )
    }
}