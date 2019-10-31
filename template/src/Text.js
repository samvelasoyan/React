import React from 'react'
import "./App.css"

export default function Text({signUp}){
    return(
        signUp?(<div className="txt">
            <h1>Get Verified!</h1>
            <p>Every day, Payyed makes thousands of costumers happy.</p>
        </div>):(<div className="txt">
            <h1>Welcome back!</h1>
            <p>We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
        </div>)
    )
}





