import { Link } from "react-router-dom"
import {
    Box,
    Typography,
    Paper,
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import Sidebar from "./Sidebar";
import Form from "./Form";

const useAuthStyles = makeStyles(theme => ({
  mainWrapper : {
    display: "flex", 
    flexDirection: "row",
    boxSizing: "border-box",
    height: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down('xs')]: {
        flexDirection: "column",
        maxHeight: "90vh",
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column-reverse",
    },
  },
  redirectWrapper: {
    display: "flex", 
    flexDirection: "row",
    width: "fit-content",
    height: "10vh",
    margin: "3vh 5% 0 auto",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      margin: "3vh auto 0 auto",
    },
    [theme.breakpoints.down('xs')]: {
      margin: (props) => 
      props.isSignup ?
        "5vh auto"
      :
        "auto auto 2vh"
    },
    [theme.breakpoints.down('xs')]: {
      height: "auto",
      width: "auto",
      paddingTop: "5vh",
      margin: (props) => 
        props.isSignup ?
          "auto auto 3vh"
        :
          "auto auto 3vh"
    },
  },
  redirectText: {
    fontSize: "0.9rem",
    marginRight: "2vw",
    marginLeft: "auto",
  },
  redirectButton: {
    padding: "1.8vh 2vw",
    minWidth: "4.25vw",
    fontSize: "0.9rem",
    [theme.breakpoints.down('md')]: {
      padding: "1.8vh 2.6vw",
      minWidth: "6.75vw", 
    },
    [theme.breakpoints.down('sm')]: {
      padding: "1vh 5vw"
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0.5vh 2.5vw"
    },
  }, 
  formWrapper : {
    width: "50%",
    margin: "auto",
    marginTop: (props) => 
      props.isSignup ? 
        "12vh"
      : 
        "17vh",
    [theme.breakpoints.down('lg')]: {
      width: "60%",
    },
    [theme.breakpoints.down('md')]: {
      width: "70%",
    },
    [theme.breakpoints.down('sm')]: {
      width: "85%",
      marginTop: (props) => 
        props.isSignup ? 
          "16vh"
        : 
          "30vh",
    },
    [theme.breakpoints.down('xs')]: {
      width: "85%",
      marginTop: "3vh !important"
    }
  },
}))

const AuthWrapper = ({
    welcomeText,
    leave,
    fields,
    passwordHelper,
    confirmText,
    onFormSubmit, 
    isSignup
}) => {
    
    const authStyles = useAuthStyles({isSignup});

    return (
      <Box className={authStyles.mainWrapper}>

        <Sidebar isSignUp={isSignup}/>

        <Box className={authStyles.main}>
          <Box className={authStyles.redirectWrapper}>

            <Typography variant="subtitle1" className={authStyles.redirectText}>
              {leave.promptText}
            </Typography>

            <Link href={leave.link} to={leave.link}>
                <Paper elevation={3}>
                    <Typography variant="button" component="button" color="primary">
                        <Box className={authStyles.redirectButton} >
                          {leave.buttonText}
                        </Box>
                    </Typography>
                </Paper>
            </Link>

          </Box>
          <Box className={authStyles.formWrapper}>

              <Form 
                passwordHelper={passwordHelper}
                welcomeText={welcomeText}
                submitText={confirmText}
                fields={fields}
                onFormSubmit={onFormSubmit}
                />

          </Box>
        </Box>
      </Box>
    )
}

export default AuthWrapper;