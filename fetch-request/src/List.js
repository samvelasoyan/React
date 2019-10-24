import React from "react"

function List({ id, title, body, showMore}) {
    return (
        <ul>
            <li><b>id:</b> {id}<span onClick={showMore}>show more</span></li>
            <li><b>title:</b> {title.length > 49? title.slice(0, 50) + "..." : title}</li>
            <li><b>body:</b> {body.slice(0, 47)}...</li>
        </ul>
    );
}

export default List