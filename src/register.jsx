import React, { useState } from 'react';
import './register.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log('Form submitted:', formData);
        alert('Registration Successful!');
    };

    return (
        <div className="registration-container">
            <div className="registration-card">
                <h2 className="registration-title">Create Your Account</h2>
                <p className="registration-subtitle">Join us tonight</p>

                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Aditya Prasad Sahu"
                            required
                        />
                    </div>

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
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn-primary">
                        Sign Up
                    </button>
                </form>

                <p className="login-link">
                    Already have an account? <a href="#">Log in</a>
                </p>
            </div>
        </div>
    );
}

export default RegistrationForm;
