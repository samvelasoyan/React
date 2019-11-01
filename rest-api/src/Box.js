import React from "react";

function Box({ fullName, email, position, remove, country, id, edit }) {
    return (
        <tr className="row">
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{position}</td>
            <td>{country}</td>
            <td>
                <span onClick={edit}><i id={id} className="fas fa-user-edit"></i></span>
                <span onClick={remove}><i id={id} className="fas fa-user-times"></i></span>
            </td>
        </tr>
    );
}

export default Box;
