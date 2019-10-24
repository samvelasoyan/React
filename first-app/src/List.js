import React from "react"

function List({ value, deleteTask, completeTask, completed}) {
    return (
            <tr className={`row ${completed? "checked" : ""}`}>
                <td className="icon">
                    <a href="#" onClick={completeTask}>
                        <i className="far fa-circle"></i>
                        <i className="far fa-check-circle"></i>
                    </a>
                </td>
                <td className="txt">{value}</td>
                <td className="icon">
                    <a href="#" onClick={deleteTask}>
                        <i className="fas fa-times"></i>
                    </a>
                </td>
            </tr>
        
    );
}

export default List