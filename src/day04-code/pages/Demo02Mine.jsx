import React from "react"
import querystring from "querystring"
import Demo07MineDemo from "./Demo07MineDemo"


// 默认不传参数时
// const Demo02Mine = (props) =>{
//     return(
//         <div>
//             Mine
//         </div>
//     )
// }

const Demo02Mine = (props) =>{
    // http://localhost:3000/#/mine?name=name&age=18

    // 第一种读取地址栏的方案
    // const params = new URLSearchParams(props.location.search)
    // console.log(params.get("name"));
    // console.log(params.get("age"));

    // 第二种读取地址栏的方案
    // const value = querystring.parse(props.location.search);
    // console.log(value);
    // console.log(value.name);
    // console.log(value.age);


    const clickHandle = () =>{
        // push 叠加的上一次的页面依然存在内中，
        // props.history.push("/");

        // replace是替换，上一次的页面不存在了
        props.history.replace("/")
    }

    return(
        <div>
            Mine
            <button onClick={ clickHandle }>回到Home页面</button>
            <Demo07MineDemo />
        </div>
    )
}

export default Demo02Mine