import { Link } from "react-router-dom"
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


const Welcome = ({welcomeText, leave, fields, passwordHelper, confirmText, onFormSubmit}) => {
    
    const sidebarStyles = useSidebarStyles();
    const loginStyles = useLoginStyles();

    const checkNeedInputHelper = (label) => {
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
    <Box display="grid" height="100vh" sx={{display: "flex", flexDirection: "row", boxSizing: "border-box"}}>
    <Grid item sm={6} md={5} lg={5} xl={4} >
      <Box sx={{position: "relative", display: {xs: "none", sm: "flex"}}} width="100%" height="100%">
        <Box className={sidebarStyles.aboutDiv}>
          <Box component="img" src={chatBubble} />
          <Typography variant="h6" component="h5" align="center" className={sidebarStyles.aboutText}>
            Converse with anyone<br/>with any language
          </Typography>

        </Box>
        <Box sx={{bgcolor: "primary.overlay"}} className={sidebarStyles.overlay}/>
        <Box component="img" src={bgLanguage} className={sidebarStyles.image} sx={{objectFit: "cover"}} width="inherit" height="100%"/>
      </Box>
    </Grid>
    <Grid container item xs={12} sm={6} md={7} lg={7} xl={8} direction="column">
      <Box className={loginStyles.createAcc}>
        <Typography variant="subtitle1" className={loginStyles.createAccText}>
          {leave.promptText}
        </Typography>
        <Link href="/register" to="/register">
          <Paper elevation={3}>
              <Typography variant="button" color="primary">
                {leave.buttonText}
              </Typography>
          </Paper>
        </Link>
      </Box>
      <Box mt={"20vh"} mx={"auto"} mb={"auto"} sx={{width: "40%"}}>
      <form onSubmit={onFormSubmit}>
        <Grid container justifyContent="center" direction="column">
          <Typography variant="h4" component="h1" align="left" className={loginStyles.welcomeText}>
            {welcomeText}
          </Typography>
        {fields.map((field, idx) => {
        const inputProps = checkNeedInputHelper(field.label);
        console.log(inputProps)
          return <FormControl margin="normal" key={idx} required>
            <TextField
              label={field.displayLabel}
              aria-label={field.label}
              type={field.label}
              name={field.label}
              size="large"
              InputProps={inputProps}
            />
          </FormControl>
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