import React from "react";

function Box({ name, email, company, remove, address, id, edit }) {
    return (
        <tr className="row">
            <td>{name}</td>
            <td>{email}</td>
            <td>{company.name}</td>
            <td>{address.city}</td>
            <td>
                <span onClick={edit}><i id={id} className="fas fa-pen"></i></span>
                <span onClick={remove}><i id={id} className="fas fa-times-circle"></i></span>
            </td>
        </tr>
    );
}

export default Box;
