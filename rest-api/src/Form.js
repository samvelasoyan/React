import React from 'react';

function Form({fullName, email, position, country, id, changeName, changeMail, changePosition, changeCountry, edit, discard, confirm}){
    return(
            <div className="box" id={id}>
                <span onClick={discard}><i id={id}  className="fas fa-times"></i></span>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td><input id={id} type="text" name="name" value={fullName} onChange={changeName} required/></td>  
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td><input id={id} type="email" name="email" value={email} onChange={changeMail} required/></td>
                    </tr>
                    <tr>
                      <td>Position:</td>
                      <td><input id={id} type="text" name="position" value={position} onChange={changePosition} required/></td>
                    </tr>
                    <tr>
                      <td>Country:</td>
                      <td><input id={id} type="text" name="country" value={country} onChange={changeCountry} required/></td>
                    </tr>
                  </tbody>
                </table>
                <button id={id} onClick={confirm}>Confirm Changes</button>
            </div>
    )
}

export default Form