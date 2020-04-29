import React from "react"
import Demo02Child from "./Demo02Child"

export default class Demo01Parent extends React.Component{
    state = {
        value:""
    }

    clickHandle = (data) =>{
        this.setState({
            value:data
        })
    }

    render(){
        return(
            <div>
                Parent:{ this.state.value }
                <Demo02Child title="父传子" onMyEvent={ this.clickHandle }/>
            </div>
        )
    }
}