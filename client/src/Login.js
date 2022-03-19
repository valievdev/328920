import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Paper,
  InputAdornment
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import bgLanguage from "./img/bg-img.png"
import chatBubble from "./img/bubble.svg"
import Welcome from "./Welcome";

const useSidebarStyles = makeStyles({
  aboutDiv: {
    position: "absolute",
    top: "30%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    zIndex: 10,
  },
  aboutText: {
    marginTop: '5%',
    color: 'white',
    fontSize: '1.8rem'
  },
  overlay : {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
  image : {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
})
const useLoginStyles = makeStyles({
  createAcc: {
    display: "flex", 
    flexDirection: "row",
    width: "95%",
    margin: "2vh 5% 0 auto",
    alignItems: "center"
  },
  createAccText: {
    marginRight: "4vw",
    marginLeft: "auto",
  },
  paper: {
    minWidth: "13vw",
    width: "fit-content",
    display: "flex"
  },
  welcomeText: {
    margin: "0 auto 0 0"
  }
})

const Login = ({ user, login }) => {
  const history = useHistory();
  const sidebarStyles = useSidebarStyles();
  const loginStyles = useLoginStyles();

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
    <Welcome welcomeText="Welcome Back!" leave={{promptText: "Don't have an account?", buttonText: "Create Account"}}
      fields={[
        {label: "username", displayLabel: "Username"},
        {label: "password", displayLabel: "Password"}
      ]} passwordHelper="Forgot?" confirmText="Login"
      onFormSubmit={handleLogin}
    />
  );
};

export default Login;
