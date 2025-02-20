import React, { useState } from 'react';
import '../Style/user.css';
import { every } from 'lodash';

function UserInput() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(null); // Initialize id state with null

    const handleFname = (event) => {
        setFname(event.target.value);
    }

    const handleLname = (event) => {
        setLname(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const sendData = async () => {
        const response = await fetch('http://localhost:2000', {
            method: "POST",
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify({ fname, lname, email, password })
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            setId(data.id);
        });
    }

    // Conditionally render based on the id state
    return (
        <div className='Upto'>
            {id ? (
                <div className='form'>
                    <p>You are logged in. No need to sign up.</p>
                </div>
            ) : (
                <div className='form'>
                    <h1>Sign Up</h1>
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        placeholder='Alex'
                        value={fname}
                        onChange={handleFname}
                    />
                    <br /><br />
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        placeholder='Murmu'
                        value={lname}
                        onChange={handleLname}
                    />
                    <br /><br />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='sdadasds.@gmail.com'
                        value={email}
                        onChange={handleEmail}
                    />
                    <br /><br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='********'
                        value={password}
                        onChange={handlePassword}
                    />
                    <br /><br />
                    <button onClick={sendData}>Submit</button>
                </div>
            )}
        </div>
    );
}

export default UserInput;
