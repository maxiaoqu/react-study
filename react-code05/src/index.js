import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import thunk from "redux-thunk"
import App from './App';
import reducer from "./reducers/counter"
import rootReducer from "./reducers"

// 异步和同步
// 定时器  网络请求


// 自己定义中间件（捕获日志）
// const logger = store  => next => action =>{
//     console.log("dispatch->",action);
//     let result = next(action); // 加载下一个中间件
//     console.log("next state->",store.getState());
//     return result;
// }
// ======>>>>>
// const logger(store){
//     return function next() {
//         return function action() {
//
//         }
//     }
// }

// 自己定义中间件（捕获异常）
// const error = store => next => action => {
//     try{
//         next(action)
//     }catch(e){
//         console.log("error->",e);
//     }
// }

// 第一种
// 创建store仓库
// const store = createStore(reducer);
// 监听数据的变化
// store.subscribe(() => console.log("state:", store.getState()))

// const render = () => {
//     ReactDOM.render(
//         <App
//             onIncrement={() => store.dispatch({ type: "INCREMENT" })}
//             onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//             value={store.getState()}
//         />,
//         document.getElementById('root'));

// }
// render();
// 监听数据的变化重新渲染
// store.subscribe(render)


// 第二种
// 创建store仓库,applyMiddleware:使用中间件（自己定义）
// const store = createStore(rootReducer,{},applyMiddleware(logger,error));
// 第三方提供的中间件：thunk完成异步操作
const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(logger,thunk)));
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    ,
    document.getElementById('root'));