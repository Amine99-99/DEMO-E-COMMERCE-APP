import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    address: '',
    code: '',
    city: '',
    phone: ''
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const specialCharacters = '!@#$%^&*()';
    let newErr = {};

    if (form.name.trim() === '') {
      newErr.name = 'Enter your name';
      isValid = false;
    }
    if (form.lastname.trim() === '') {
      newErr.lastname = 'Enter your last name';
      isValid = false;
    }
    if (form.email.trim() === '') {
      newErr.email = 'Enter your email';
      isValid = false;
    }
    if (form.password.length < 9) {
      newErr.password = 'Your password is weak';
      isValid = false;
    } else {
      let lowerCount = 0;
      let upperCount = 0;
      let digitCount = 0;
      let specialCount = 0;
      for (let i = 0; i < form.password.length; i++) {
        let char = form.password[i];
        if (char === char.toLowerCase()) {
          lowerCount++;
        }
        if (char === char.toUpperCase()) {
          upperCount++;
        }
        if (specialCharacters.includes(char)) {
          specialCount++;
        }
        if (/\d/.test(char)) {
          digitCount++;
        }
      }
      if (upperCount === 0 || lowerCount === 0 || digitCount === 0 || specialCount === 0) {
        newErr.password = 'Password must include at least one special character, digit, upper-case and lower-case';
        isValid = false;
      }
    }
    if (form.confirmPassword !== form.password) {
      newErr.confirmPassword = 'Passwords must match';
      isValid = false;
    }
    if (form.address.trim() === '') {
      newErr.address = 'Your address must be included';
      isValid = false;
    }
    if (form.code.trim() === '') {
      newErr.code = 'Enter your postal code';
      isValid = false;
    }
    if (form.city.trim() === '') {
      newErr.city = 'Enter your city';
      isValid = false;
    }
    if (form.phone.trim() === '') {
      newErr.phone = 'Enter your phone number';
      isValid = false;
    }

    setError(newErr);
    return isValid;
  };

  const reset = () => {
    setForm({
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      address: '',
      code: '',
      city: '',
      phone: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      reset();
      try {
        const response = await fetch('http://127.0.0.1:5000/register', {  // Changed to /register
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        });
        const result = await response.json();
        if (response.ok) {
          setSuccess(result.message);
          setError({});
        } else {
          setError(result.errors ? Object.values(result.errors).flat().join(', ') : result.message);
          setSuccess(null);
        }
      } catch (err) {
        setError('An error occurred');
        setSuccess(null);
      }
    }
  };

  return (
    <div>
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          {error.name && <p>{error.name}</p>}
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={form.name} onChange={handleChange} />
        </div>
        <div>
          {error.lastname && <p>{error.lastname}</p>}
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' value={form.lastname} onChange={handleChange} />
        </div>
        <div>
          {error.email && <p>{error.email}</p>}
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={form.email} onChange={handleChange} />
        </div>
        <div>
          {error.password && <p>{error.password}</p>}
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={form.password} onChange={handleChange} />
        </div>
        <div>
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' id='confirmPassword' value={form.confirmPassword} onChange={handleChange} />
        </div>
        <div>
          {error.birthDate && <p>{error.birthDate}</p>}
          <label htmlFor='birthDate'>Birth Date</label>
          <input type='date' id='birthDate' value={form.birthDate} onChange={handleChange} />
        </div>
        <div>
          {error.address && <p>{error.address}</p>}
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' value={form.address} onChange={handleChange} />
        </div>
        <div>
          {error.code && <p>{error.code}</p>}
          <label htmlFor='code'>Postal Code</label>
          <input type='number' id='code' value={form.code} onChange={handleChange} />
        </div>
        <div>
          {error.city && <p>{error.city}</p>}
          <label htmlFor='city'>City</label>
          <input type='text' id='city' value={form.city} onChange={handleChange} />
        </div>
        <div>
          {error.phone && <p>{error.phone}</p>}
          <label htmlFor='phone'>Phone Number</label>
          <input type='number' id='phone' value={form.phone} onChange={handleChange} />
        </div>
        <div>
          <input type='submit' value='Register' />
        </div>
      </form>
    </div>
  );
};

export default Register;
