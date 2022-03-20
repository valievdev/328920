import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Welcome from "./components/Welcome";

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Welcome welcomeText="Welcome Back!" 
    leave={{promptText: "Don't have an account?", buttonText: "Create Account", link: "/register"}}
      fields={[
        {label: "username", displayLabel: "Username"},
        {label: "password", displayLabel: "Password"}
      ]} passwordHelper="Forgot?" confirmText="Login"
      onFormSubmit={handleLogin}
    />
  );
};

export default Login;
