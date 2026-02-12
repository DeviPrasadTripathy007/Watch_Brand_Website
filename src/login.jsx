import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempted:', formData);
        alert('Login Successful!');
        navigate('/');
    };

    return (
        <div>
            <button
                onClick={() => navigate('/')}
                style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
            >
                Back
            </button>
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">Sign in to your account</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="aditya@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="********"
                                required
                            />
                        </div>

                        <div className="forgot-password">
                            <button type="button" className="link-button" onClick={() => alert('Password reset link sent to your email!')}>
                                Forgot Password?
                            </button>
                        </div>

                        <button type="submit" className="submit-btn-primary">
                            Sign In
                        </button>
                    </form>

                    <p className="register-link">
                        Don't have an account? <button type="button" className="link-button" onClick={(e) => {
                            e.preventDefault();
                            navigate('/register');
                        }}>Sign up</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
