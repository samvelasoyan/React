import React from "react";
import "./App.css";

export default function Form({ signUp, onClick }) {
    return (
        <div className="form">
            <form>
                {signUp ? (
                    <div className="inputs">
                        <h1 style={{ fontWeight: "normal" }}>Sign Up</h1>
                        <div className="input-container">
                            <p>Full Name</p>
                            <input type="text" name="fullname" placeholder="Enter Your Name" />
                        </div>
                        <div className="input-container">
                            <p>Email Address</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Sign Up</button>
                            <p
                                style={{ textAlign: "center", display: "inline-block" }}
                                className="footer"
                            >
                                Already have an account?
                            </p>
                            <a href="#" onClick={onClick}> Log In</a>
                        </div>
                    </div>
                ) : (
                    <div className="inputs">
                        <h1 style={{ fontWeight: "normal" }}>Log In</h1>
                        <div className="input-container">
                            <p>Email Address</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Log In</button>
                            <p
                                style={{ textAlign: "center", display: "inline-block" }}
                                className="footer"
                            >
                                Don't have an account?
                            </p>
                            <a href="#" onClick={onClick}> Sign Up</a>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

// signUp?(<div class="txt">
//             <h1>Get Verified!</h1>
//             <p>Every day, Payyed makes thousands of costumers happy.</p>
//         </div>):(<div class="txt">
//             <h1>Welcome back!</h1>
//             <p>We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
//         </div>)

// <div class="input-container">
//                         <p>Full Name</p>
//                         <input type="text" name="fullname" placeholder="Enter Your Name"/>
//                     </div>
//                     <div class="input-container">
//                         <p>Email Address</p>
//                         <input type="email" name="email" placeholder="Enter Your Email" required/>
//                     </div>
//                     <div class="input-container">
//                         <p>Password</p>
//                         <input type="password" name="password" placeholder="Enter Password" required/>
//                     </div>
//                     <div class="button-container">
//                         <button type="submit">Sign Up</button>
//                         <p style="text-align: center; display: inline-block;" class="footer">Already have an account?</p><a href="#"> Log In</a>
//                     </div>
