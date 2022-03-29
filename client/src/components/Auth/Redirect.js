import { Link } from "react-router-dom"
import { Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useRedirectStyles = makeStyles(theme => ({
  	main: {
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
}))

const Redirect = ({prompt}) => {

	const redirectStyles = useRedirectStyles();

	return (
        <Box className={redirectStyles.main}>

        	<Typography variant="subtitle1" className={redirectStyles.redirectText}>
            	{prompt.text}
        	</Typography>

        	<Link href={prompt.link} to={prompt.link}>
                <Paper elevation={3}>
                    <Typography variant="button" component="button" color="primary">
                        <Box className={redirectStyles.redirectButton}>
                          {prompt.buttonText}
                        </Box>
                    </Typography>
                </Paper>
            </Link>

        </Box>
	)
}
export default Redirect;