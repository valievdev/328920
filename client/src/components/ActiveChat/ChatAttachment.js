import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
		root : {
			maxWidth: "12vw",
			maxHeight: "12vw",
			objectFit: "contain",
			borderRadius: props => props.borderRadius
		},
}));

const calculateBorderRadius = (isSenderBubble, withMessage) => {
	if (withMessage) {
		if (isSenderBubble) {
			return "10px 10px 0 0";
		}
		return "0 10px 0 0";

	} else if (isSenderBubble) return "10px 10px 0 10px";
	return "0 10px 10px 10px"
}

const ChatAttachment = ({ url, isSenderBubble, withMessage }) => {
	const borderRadius = calculateBorderRadius(isSenderBubble, withMessage);
	const classes = useStyles({borderRadius});

	return (
			<img 
				src={url}
				className={classes.root}
				alt="Chat Attachment" 
				/>
	)
}
export default ChatAttachment;