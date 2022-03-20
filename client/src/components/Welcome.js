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
import bgLanguage from "../img/bg-img.png"
import chatBubble from "../img/bubble.svg"

const useSidebarStyles = makeStyles(theme => ({
    mainWrapper: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
    },
    main: {
      position: "absolute",
      top: "28%",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      zIndex: 10,
      [theme.breakpoints.down('sm')]: {
        top: "5%",
      },
    },
    chatBubble: {
        width: "5vw",
        margin: "auto",
        objectFit: "contain",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    aboutText: {
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
      background: `linear-gradient(to top, ${theme.palette.primary.overlayGradientStart}, ${theme.palette.primary.overlayGradientEnd})`,
    },
    bgImage : {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      [theme.breakpoints.down('sm')]: {
        objectPosition: "0 10%",
      },
    },
    }))
  const useWelcomeStyles = makeStyles(theme => ({
    main : {
        display: "flex", 
        flexDirection: "row",
        boxSizing: "border-box",
        minHeight: "100vh",
        overflow: "hidden",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            maxHeight: "90vh",
        },
    },
    createAcc: {
      display: "flex", 
      flexDirection: "row",
      width: "95%",
      height: "10vh",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        height: "auto",
        width: "auto",
      }
    },
    createAccText: {
      marginRight: "4vw",
      marginLeft: "auto",
    },
    paper: {
      minWidth: "13vw",
      width: "fit-content",
      display: "flex",
    },
    welcomeText: {
      margin: "0 auto 0 0",
      [theme.breakpoints.down("sm")]: {
          margin: "0 auto",
      },
    }
  }))


const Welcome = ({
    welcomeText, leave, fields, passwordHelper, confirmText, onFormSubmit, signup
}) => {
    
    const sidebarStyles = useSidebarStyles();
    const welcomeStyles = useWelcomeStyles();

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
    }

    return (
    <Box display={{sm: "grid"}} sx={{flexDirection: {xs: "column", sm: "column"}}} className={welcomeStyles.main}>
      <Box display="grid" item sx={{width: {xs: "100%", sm: "50%", md: "41%"}, height: {xs: signup? "20vh": "25vh", sm: "inherit"}}}>
        <Box className={sidebarStyles.mainWrapper} sx={{display: "flex"}}>

          <Box className={sidebarStyles.main} sx={{marginTop: {xs: signup ? "5%": "10%", sm: "5%"}}}>
            <Box component="img" src={chatBubble} className={sidebarStyles.chatBubble}/>
            <Typography variant="h6" component="h5" className={sidebarStyles.aboutText}>
              Converse with anyone<br/>with any language
            </Typography>
          </Box>
          <Box sx={{}} className={sidebarStyles.overlay}/>
          <Box component="img" src={bgLanguage} className={sidebarStyles.bgImage} />
        
        </Box>
      </Box>
      <Box display="flex" container item sx={{
        width: {xs: "100%", sm: "50%", md: "59%"},
        flexDirection: {xs: "column-reverse", sm: "column"}}}
        >
        <Box className={welcomeStyles.createAcc} sx={{
          margin: {xs: signup? "5vh auto" : "16vh auto" ,sm: "3vh 5% 0 auto"}}}
          >

          <Typography variant="subtitle1" className={welcomeStyles.createAccText}>
            {leave.promptText}
          </Typography>

          <Link href={leave.link} to={leave.link}>
              <Paper elevation={3}>
                  <Typography variant="button" component="button" color="primary">
                      <Box px="2vw" py={{sm:"1.3vh"}} sx={{minWidth: "7vw"}}>
                        {leave.buttonText}
                      </Box>
                  </Typography>
              </Paper>
          </Link>

        </Box>
        <Box mt={{xs: signup ? "3vh": "7vh", sm: signup ? "12vh" : "17vh"}} mx={"auto"} mb={"auto"} sx={{width: {xs: "85%", sm: "80%", md: "70%", lg: "50%"}}}>
          <form onSubmit={onFormSubmit}>
            <Grid container justifyContent="center" direction="column">

              <Typography variant="h4" component="h1" className={welcomeStyles.welcomeText}>
                {welcomeText}
              </Typography>
              {fields.map((field, idx) => {
                  const inputProps = checkNeedPasswordHelper(field.label);
                  return (
                    <FormControl margin="normal" key={idx} required 
                      error={field.formErrorMessage ? !!field.formErrorMessage.confirmPassword: null}
                      >
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
                          </FormHelperText>
                      : null}
                    </FormControl>
                  )
                })}

              <Box mt={{xs: "4vh", sm: "8vh"}} display="flex">
                <Button type="submit" variant="contained" size="small" color="primary">
                  <Typography variant="button" >
                    <Box fontWeight={700} sx={{padding: {sm: "1.5vh 0"}}}> 
                        {confirmText}
                    </Box>
                  </Typography>
                </Button>
              </Box>

            </Grid>
          </form>
        </Box>
      </Box>
  </Box>
    )
}

export default Welcome;