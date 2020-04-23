import React from 'react';

export default class InheritanceDemo extends React.Component {
    render(){
        return(
            <div>
                哈哈哈:{ this.props.children }
            </div>
        )
    }
}