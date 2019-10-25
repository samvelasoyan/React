import React from 'react';

function Form({fullName, email, position, country, id, changeName, changeMail, changePosition, changeCountry, edit}){
    return(
        <div className="box" id={id}>
            <span onClick={edit}><i id={id}  className="fas fa-times"></i></span>
            <form>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td><input id={id} type="text" name="name" value={fullName} onChange={changeName}/></td>  
                </tr>
                <tr>
                  <td>Email:</td>
                  <td><input id={id} type="email" name="email" value={email} onChange={changeMail}/></td>
                </tr>
                <tr>
                  <td>Position:</td>
                  <td><input id={id} type="text" name="position" value={position} onChange={changePosition}/></td>
                </tr>
                <tr>
                  <td>Country:</td>
                  <td><input id={id} type="text" name="country" value={country} onChange={changeCountry}/></td>
                </tr>
              </tbody>
            </table>
            </form>
        </div>
    )
}

export default Form