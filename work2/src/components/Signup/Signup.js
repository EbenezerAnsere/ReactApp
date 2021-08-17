import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import "./Signup.css"


export default function Signup() {
    const [email, setEmail] = useState("");
    
    const onSubmit = async (e) => {
        e.preventDeufault();
    }
    
    const config = {
        url: "http://localhost:3000/Signup",
        handleCodeInAp: true,
    };
    //if ()

    // <div className=""></div>

    return (
        <div className="Signup-form">
            <form>
                <h3>Sign up</h3>
                <label>First Name:</label>
                <input type="text" placeholder="First Name" required />
                <label>Last Name:</label>
                <input type="text" placeholder="Last Name" required />
                <label>Email</label>
                <input type="text" placeholder="Email" value={email} onchange={(e) => setEmail(e.target.value)} />
                <label>Residence:</label>
                <input type="text" placeholder="Residence" required />
                <label>Date of birth:</label>
                <input type="text"  placeholder="Date of birth" required />
                <label>Password:</label>
                <input type="password" placeholder="password" required />
                <button className="signup">Sign Up</button>
            </form>
        </div>
    )
}
