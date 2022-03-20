import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Welcome from './components/Welcome';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Welcome welcomeText="Create an account."
    leave={{promptText: "Already have an account?", buttonText: "Login", link: "/login"}}
    fields={[
      {label: "username", displayLabel: "Username"},
      {label: "email", displayLabel: "E-mail address"},
      {label: "password", displayLabel: "Password", formErrorMessage: formErrorMessage},
      {label: "confirmPassword", displayLabel: "Confirm Password", formErrorMessage: formErrorMessage}
    ]} confirmText="Create"
    signup={true} onFormSubmit={handleRegister}
    />
  );
};

export default Signup;
