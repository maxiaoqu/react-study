import React from "react"

export default class Demo08Book extends React.Component{
    render(){
        return(
            <div>
                Book:
                {/*  路由嵌套显示的位置  */}
                { this.props.children }
            </div>
        )
    }
}