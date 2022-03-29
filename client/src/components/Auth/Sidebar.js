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
        width: "34%",
        [theme.breakpoints.down('md')]: {
            width: "40%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "45%",
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
            width: "100%",
            height: "100%",
            top: 0,
            margin: 0,
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
        fontSize: "1.6rem",
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            margin: "auto 0"
        }
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
            objectPosition: "35% 0"
        },
        [theme.breakpoints.down('xs')]: {
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
