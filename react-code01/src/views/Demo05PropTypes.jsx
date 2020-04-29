import React from 'react';
import PropTypes from 'prop-types';

export default class Demo05PropTypes extends React.Component {
    render(){
        return(
            <div>
                Hello:{ this.props.title }
            </div>
        )
    }
}
// Demo05PropTypes.propTypes = {
//     title:PropTypes.number.isRequired
// }

Demo05PropTypes.propTypes = {
    title:PropTypes.string
}

Demo05PropTypes.defaultProps = {
    title:'默认值'
}