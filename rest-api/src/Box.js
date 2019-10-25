import React from 'react';

function Box({fullName, email, position, country, id, edit}){
    return(
        <div className="box" id={id}>
            <span onClick={edit}><i id={id} className="fas fa-edit"></i></span>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{fullName}</td>  
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Position:</td>
                  <td>{position}</td>
                </tr>
                <tr>
                  <td>Country:</td>
                  <td>{country}</td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

export default Box