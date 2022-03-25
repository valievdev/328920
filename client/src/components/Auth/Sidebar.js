import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import bgLanguage from "../../img/bg-img.png"
import chatBubble from "../../img/bubble.svg"

const useSidebarStyles = makeStyles(theme => ({
    mainWrapper: {
        position: "relative",
        display: "flex",
        overflow: "hidden",
        height: "inherit",
        width: "41%",
        [theme.breakpoints.down('md')]: {
            width: "50%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: (props) =>
                props.isSignup ?
                "20vh"
                :
                "25vh"
        },
    },
    main: {
        position: "absolute",
        top: "28%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        zIndex: 10,
        [theme.breakpoints.down('md')]: {
            marginTop: "5%",
        },
        [theme.breakpoints.down('xs')]: {
            top: "5%",
            marginTop: (props) => 
                props.isSignup ? 
                    "3vh"
                :
                    "4.5vh"
        },
    },
    chatBubble: {
        width: "5vw",
        margin: "auto",
        marginBottom: "3vh",
        objectFit: "contain",
        [theme.breakpoints.down('md')]: {
            width: "7vw"
        },
        [theme.breakpoints.down('xs')]: {
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
        background: 
            `linear-gradient(to top,
            ${theme.palette.primary.overlayGradientStart}, 
            ${theme.palette.primary.overlayGradientEnd})`,
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

const Sidebar = ({isSignup}) => {

    const sidebarStyles = useSidebarStyles({isSignup});
    
    return (
      <Box className={sidebarStyles.mainWrapper}>
        <Box className={sidebarStyles.main}>

          <Box component="img" src={chatBubble} className={sidebarStyles.chatBubble}/>
          <Typography variant="h6" component="h5" className={sidebarStyles.aboutText}>
            Converse with anyone<br/>with any language
          </Typography>

        </Box>

        <Box className={sidebarStyles.overlay}/>
        <Box component="img" src={bgLanguage} className={sidebarStyles.bgImage} />

      </Box>
    )
}

export default Sidebar;
