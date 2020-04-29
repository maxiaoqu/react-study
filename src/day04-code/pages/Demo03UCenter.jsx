import React from "react"

const Demo03UCenter = (props) =>{
    // http://localhost:3000/#/mine/ucenter/1001
    console.log(props);
    return(
        <div>
            Hello UCenter:{ props.match.params.id } - { props.match.params.name }
        </div>
    )
}

export default Demo03UCenter