import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = formValidation();
    if (Object.keys(validationResult).length > 0) {
      setErrors(validationResult);
    }
  };

  const formValidation = () => {
    const errors = { firstName: '', lastName: '', password: '', email: '' };
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'LastName is Required';
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h4>SignUp Form</h4>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleChange} />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
