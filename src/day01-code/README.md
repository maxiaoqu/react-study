> ## 核心概念

### JSX语法介绍--->>>(Demo01Jsx.jsx)
JSX语法：JavaScript + XML语法(HTML)
解读jsx语法：遇到<>按照HTML语法解析，遇到{}按照JavaScript

### 组件--->>>(Demo02Components.jsx)
组件的后缀可以是js，也可以是jsx
一个React项目，是由成千上万个组件组成

### 条件渲染--->>>(Demo03IfComponents.jsx)

### porps属性--->>>(Demo04Porps.jsx)
组件的复用性很重要

### 使用 PropTypes 进行类型检查--->>>(Demo05PropTypes.jsx)
增强程序的健壮性

### State--->>>(Demo06State.jsx)

### setState更新是同步还是异步--->>>(Demo07Setstate.jsx)
1.setState会引起视图的重绘
2.在可控的情况下是异步，在非可控的情况下是同步

### React生命周期函数--->>>(Demo08Lifecycle.jsx)
随着我们对React理解和使用越来越多，生命周期的参考价值越来越高
函数列表:
    componentWillMount:在组件渲染之前执行
    componentDidMount:在组件渲染之后执行
    shouldComponentUpdate:返回true和false，true代表允许改变，false代表不允许改变
    componentWillUpdate:数据在改变之前执行(state,props)
    componentDidUpdate:数据修改完成(state,props)
    componentWillReveiceProps:props发生改变执行
    componentWillUnmount:组件卸载前执行
子传父!!!
父传子!!!

### 列表 & Key--->>>(Demo09ListKeys.jsx)
主要问题是key

### 表单--受控组件--->>>(Demo10From.jsx)
可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新

### 表单--非受控组件--->>>(Demo11FromRef.jsx)
<input type="file" /> 始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。

### Refs操作DOM--->>>(Demo12Ref.jsx)
1.管理焦点，文本选择或媒体播放
2.触发强制动画
3.集成第三方 DOM 库

### 组合 vs 继承--->>>(Demo13Inheritance.jsx)
this.props.children

### 状态提升--->>>(components/index.jsx)
组件之间的数据交互