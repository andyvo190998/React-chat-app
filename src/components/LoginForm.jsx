import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "742e0410-898e-41cc-a454-eb28a201adf0", "User-Name": userName, "User-Secret": passWord };
        try {
            await axios.get('https://api.chatengine.io/chats',  {headers : authObject} );
            localStorage.setItem('userName', userName);
            localStorage.setItem('passWord', passWord);
            window.location.reload();
        } catch (error) {
            alert('incorrect user name or password. Please try this again!')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="User name" required />
                    <input type="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
