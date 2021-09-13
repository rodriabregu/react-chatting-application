import axios from 'axios';
import App from '../App';
import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";


const projectID = '86e0352a-1fbe-4612-be20-5175b6a8039d';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();
            <Redirect to="/" />
        } catch (err) {
            setError('&nbsp; Ops, incorrect credentials.')
        }
    }

    useEffect(() => {
        const auth0 = localStorage.getItem('username')
        const auth1 = localStorage.getItem('password')
        console.log('auth0', auth0)
        if(auth0 && auth1 !== null) {
            <Redirect to="/" />;
        }
    }, [])

    console.log('storage',localStorage.getItem('username'))
    return ( 
        <div className='wrapper'>
            { !localStorage.getItem('username') ?
            <div className='form'>
                <h1 className='title'>Chat Application :D</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} className='input' placeholder='Username...' requiere />
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='input' placeholder='Password...' requiere />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start chatting</span>
                        </button>
                    </div>
                    <div>
                        <h2 className='error'>{error}</h2>
                    </div>
                </form>
            </div>
            : <App />
            }
        </div>
    )
}

export default LoginForm;