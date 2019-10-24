import React from "react"

function Info({title, body, showLess}){
    return <div className="info">
        <span onClick={showLess}><i className="fa fa-times"></i></span>
        <p><b>title:</b> {title}</p>
        <p><b>body:</b> {body}</p>
    </div>
}

export default Info