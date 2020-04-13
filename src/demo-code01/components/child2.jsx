import React from "react"

export default class Child2 extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.money * 7}</p>
            </div>
        )
    }
}