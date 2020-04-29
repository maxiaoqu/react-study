import React from "react"
import querystring from "querystring"
import MineDemo from "./MineDemo"

const Mine = (props) =>{
    // const params = new URLSearchParams(props.location.search)
    // console.log(params.get("name"));
    // console.log(params.get("age"));
    // const value = querystring.parse(props.location.search);
    // console.log(value);
    // console.log(value.name);
    // console.log(value.age);
   

    const clickHandle = () =>{
        // props.history.push("/");
        // push 叠加的上一次的页面依然存在内中， replace是替换，上一次的页面不存在了
        props.history.replace("/")
    }

    return(
        <div>
            Mine
            <button onClick={ clickHandle }>回到Home页面</button>
            <MineDemo />
        </div>
    )
}

export default Mine