import React,{useState} from 'react';
import '../styles/front.css'

function Front({showUsers}){
    const [load, setLoad] = useState(true)
    const loader = () => {
        setLoad(!load)
        showUsers()
    }
    return(
        <div className={`front${load ? '': ' loading'}`}>
            <i onClick={()=>loader()} className="far fa-address-card"></i>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={`text${load ? '': ' clicked'}`}><i className='fas fa-caret-square-left'></i> Get Data</div>
        </div>
    )
}

export default Front