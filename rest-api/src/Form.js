import React from 'react';

function Form({fullName, email, position, country, id, changeName, changeMail, changePosition, changeCountry, remove, discard, confirm}){
    return(
            <div className="box" id={id}>
              <form>
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
                <button type="submit" id={id} onClick={confirm}><i id={id} className="fas fa-user-check"></i></button>
                <button id={id} onClick={discard}><i id={id} className="fas fa-user-times"></i></button>
              </form>
            </div>
    )
}

export default Form