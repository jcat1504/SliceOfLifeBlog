import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email: "",
        password: "",
    });

    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = e => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch(err) {
            setError(err.response.data);
        }
    };

    return (
        <div className='auth'>
            {/* auth form*/}
            <h1>Register</h1>
            <form>
                <input required type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    />
                <input required type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    />
                <button onClick={handleSubmit}>Register</button>
                {/*onform submit */}
                {err && <p>{err}</p>}
                {/*error message */}
                <span>
                    Do you have an account? <Link to="/login">Login</Link>
                    {/*Login*/}
                </span>
            </form>
        </div>
    );
};

export default Register;