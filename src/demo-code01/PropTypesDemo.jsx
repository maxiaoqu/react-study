import React from 'react';
import PropTypes from 'prop-types';

export default class PropTypesDemo extends React.Component {
    render(){
        return(
            <div>
                Hello:{ this.props.title }
            </div>
        )
    }
}
// PropTypesDemo.propTypes = {
//     title:PropTypes.number.isRequired
// }

PropTypesDemo.propTypes = {
    title:PropTypes.string
}

PropTypesDemo.defaultProps = {
    title:'默认值'
}