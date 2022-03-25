import {
    Box,
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import Sidebar from "./Sidebar";
import Form from "./Form";
import Redirect from "./Redirect";

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
    redirectPrompt,
    fields,
    passwordHelper,
    confirmText,
    onFormSubmit, 
    isSignup
}) => {
    
    const authStyles = useAuthStyles({isSignup});

    return (
      <Box className={authStyles.mainWrapper}>

        <Sidebar isSignUp={isSignup} />

        <Box className={authStyles.main}>

          <Redirect prompt={redirectPrompt} />

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