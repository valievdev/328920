import { Link } from "react-router-dom"
import {
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
    Paper,
    InputAdornment,
    FormHelperText
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import bgLanguage from "./img/bg-img.png"
import chatBubble from "./img/bubble.svg"

const useSidebarStyles = makeStyles(theme => ({
    mainWrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    main: {
      position: "absolute",
      top: "28%",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      zIndex: 10,
    },
    chatBubble: {
        width: "5vw",
        margin: "auto",
        objectFit: "contain"
    },
    aboutText: {
      marginTop: "5%",
      color: "white",
      fontSize: "1.8rem",
      textAlign: "center",
    },
    overlay : {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.overlay,
    },
    bgImage : {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
    }))
  const useLoginStyles = makeStyles({
    main : {
        display: "flex", 
        flexDirection: "row", 
        boxSizing: "border-box",
        height: "100vh",
    },
    createAcc: {
      display: "flex", 
      flexDirection: "row",
      width: "95%",
      margin: "3.5vh 5% 0 auto",
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


const Welcome = ({
    welcomeText, leave, fields, passwordHelper, confirmText, onFormSubmit, signup
}) => {
    
    const sidebarStyles = useSidebarStyles();
    const loginStyles = useLoginStyles();

    const checkNeedPasswordHelper = (label) => {
        if (label === "password" && passwordHelper) {
            return {
                endAdornment: (
                  <InputAdornment position="start">
                    <Box ml={2} mt={.5} color="primary.main" fontSize={"0.8rem"} fontWeight={600}>
                      {passwordHelper}</Box>
                  </InputAdornment>
                ),
            }
        }
        return {}
    }

    return (
    <Box display="grid" className={loginStyles.main}>
    <Grid item sm={6} md={5} lg={5} xl={4} >
      <Box className={sidebarStyles.mainWrapper} sx={{display: {xs: "none", sm: "flex"}}}>
        <Box className={sidebarStyles.main}>
          <Box component="img" src={chatBubble} className={sidebarStyles.chatBubble}/>
          <Typography variant="h6" component="h5" className={sidebarStyles.aboutText}>
            Converse with anyone<br/>with any language
          </Typography>

        </Box>
        <Box sx={{}} className={sidebarStyles.overlay}/>
        <Box component="img" src={bgLanguage} className={sidebarStyles.bgImage} />
      </Box>
    </Grid>
    <Grid container item xs={12} sm={6} md={7} lg={7} xl={8} direction="column">
      <Box className={loginStyles.createAcc}>
        <Typography variant="subtitle1" className={loginStyles.createAccText}>
          {leave.promptText}
        </Typography>
        <Link href={leave.link} to={leave.link}>
            <Paper elevation={3}>
                <Typography variant="button" component="button" color="primary">
                    <Box px="2vw" sx={{minWidth: "6vw"}}>
                       {leave.buttonText}
                    </Box>
                </Typography>
            </Paper>
        </Link>
      </Box>
      <Box mt={signup ? "12vh" : "17vh"} mx={"auto"} mb={"auto"} sx={{width: "50%"}}>
      <form onSubmit={onFormSubmit}>
        <Grid container justifyContent="center" direction="column">
          <Typography variant="h4" component="h1" align="left" className={loginStyles.welcomeText}>
            {welcomeText}
          </Typography>
        {fields.map((field, idx) => {
            const inputProps = checkNeedPasswordHelper(field.label);
            return (
                <FormControl margin="normal" key={idx} required error={field.formErrorMessage ? !!field.formErrorMessage.confirmPassword: null}>
                    <TextField
                    label={field.displayLabel}
                    aria-label={field.label}
                    type={field.label === "confirmPassword" ? "password" : field.label}
                    name={field.label}
                    size="large"
                    InputProps={inputProps}
                    />
                    {field.formErrorMessage ? 
                        <FormHelperText>
                            {field.formErrorMessage.confirmPassword}
                        </FormHelperText>: null}
                </FormControl>
            )
        })}
          <Box mt={"8vh"} display="flex">
            <Button type="submit" variant="contained" size="small" color="primary">
              <Typography variant="button" >
                <Box fontWeight={700}> 
                    {confirmText}
                </Box>
              </Typography>
            </Button>
          </Box>
        </Grid>
      </form>
      </Box>
    </Grid>
  </Box>
    )
}

export default Welcome;