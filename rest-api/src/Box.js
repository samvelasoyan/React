import React from 'react';

function Box({fullName, email, position, makeChanges, country, id, edit}){
    return(
            <tr className="row">
                  <td>{fullName}</td>  
                  <td>{email}</td>
                  <td>{position}</td>
                  <td>{country}</td>
                  <td><span onClick={edit}><i id={id} className="fas fa-edit"></i></span></td>
            </tr>
    )
}

export default Box