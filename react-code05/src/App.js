import React from 'react';
import Demo01Parent from "./views/Demo01Parent";
import Demo03Cdscss from "./views/Demo03Cdscss";
import Demo04User from "./views/Demo04User"

import { connect } from "react-redux"
// import { increment,decrement } from "./actions/counter"
import * as counterActions from "./actions/counter"
import { bindActionCreators } from "redux"

class App extends React.Component {
    render(){
        {/*第二部分1*/}
        // const {increment,decrement} = this.props;
        return (
            <div className="container">
                <ul>
                    <li>
                        自组件与父组件之间的传参【复习】:
                        <Demo01Parent/>
                    </li>
                    <hr/>
                    <li>
                        使用cdn来添加样式
                        <Demo03Cdscss/>
                    </li>
                    <hr/>
                    <li>
                        {/*使用cdn来添加样式 */}
                        <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
                        <p className="text-center">
                            {/*第一部分*/}
                            {/* <button onClick={ this.props.onIncrement } className="btn btn-primary">increment</button>
                                <button onClick={ this.props.onDecrement } className="btn btn-success">decrement</button> */}

                            {/*第二部分1*/}
                            {/* <button onClick={ () => (increment()) } className="btn btn-primary">increment</button>
                                <button onClick={ () => (decrement()) } className="btn btn-success">decrement</button> */}

                            {/*第二部分2*/}
                            <button onClick={ () => this.props.counterActions.increment(10) } className="btn btn-primary">increment</button>
                            <button onClick={ () => this.props.counterActions.decrement(5) } className="btn btn-success">decrement</button>
                        </p>
                        <Demo04User />
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        counter:state.counter
    }
}

// 第二部分1
// import { increment,decrement } from "./actions/counter"
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         increment: () => { dispatch(increment()) },
//         decrement: () => { dispatch(decrement()) }
//     }
// }

// 第二部分2
// import * as counterActions from "./actions/counter"
// import { bindActionCreators } from "redux"
const mapDispatchToProps = (dispatch) =>{
    return{
        counterActions:bindActionCreators(counterActions,dispatch)
    }
}

// 先后顺序不能颠倒
export default connect(mapStateToProps,mapDispatchToProps)(App)