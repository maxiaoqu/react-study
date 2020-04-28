import React from 'react';

export default class Demo12Ref extends React.Component {
    constructor() {
        super();
        this.HelloDiv = React.createRef();
    }

    componentDidMount() {
        this.HelloDiv.current.style.color = "red";
    }

    render() {
        return (
            <div>
                Refs和DOM
                <div ref={this.HelloDiv}>
                    Hello
                </div>
            </div>
        )
    }
}