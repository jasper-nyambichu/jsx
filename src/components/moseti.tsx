
import { useState } from 'react';
 'bootstrap/dist/css/bootstimportrap.min.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [homePlace, sethomePlace] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const validateForm = () => {
        if (username === "" || password === "") {
            setMessage("Please enter required credentials.");
            setMessageColor("text-danger");
        } else {
            setMessage("Submitted Successifully!");
            setMessageColor("text-success");
        }
    };

    return (
        <div className="container">
            <div className="login-container p-4 bg-white shadow rounded mx-auto" style={{ maxWidth: '400px', marginTop: '50px' }}>
                <h3 className="text-center">Welcome To Our Login Platform</h3>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">HomePlace:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={homePlace} 
                        onChange={(e) => sethomePlace(e.target.value)} 
                        placeholder="Enter your homePlace"
                    />
                </div>
                <button className="btn btn-primary w-100" onClick={validateForm}>Submit</button>
                {message && <p className={`mt-3 text-center ${messageColor}`}>{message}</p>}
            </div>
        </div>
    );
};

export default LoginForm;
