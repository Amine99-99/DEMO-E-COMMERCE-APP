import React, { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom'


const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess(result.message);
        setError(null);
        navigate('/home')
      } else {
        setError(result.errors ? Object.values(result.errors).flat().join(', ') : result.message);
        setSuccess(null);
      }
    } catch (err) {
      setError('An error occurred');
      setSuccess(null);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {success && <p>{typeof success === 'string' ? success : JSON.stringify(success)}</p>}
      {error && <p>{typeof error === 'string' ? error : JSON.stringify(error)}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
       <Link to='/register'>Register</Link>
    </div>
  );
};

export default Login;
