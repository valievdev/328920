import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
		root : {
			width: "12vw",
			height: "10vw",
			objectFit: "cover",
			borderRadius: props => props.borderRadius,
			marginRight: props => props.attachmentLen > 1 ?
				10
			:
				0
		},
}));

const calculateBorderRadius = (isSenderBubble, withMessage, attachmentLen) => {
	if (withMessage && attachmentLen === 1) {
		if (isSenderBubble) {
			return "10px 10px 0 0";
		}
		return "0 10px 0 0";

	} else if (isSenderBubble) return "10px 10px 0 10px";
	return "0 10px 10px 10px"
}

const ChatAttachment = ({ url, isSenderBubble, withMessage, attachmentLen }) => {
	const borderRadius = calculateBorderRadius(isSenderBubble, withMessage, attachmentLen);
	const classes = useStyles({borderRadius, attachmentLen});

	return (
			<img 
				src={url}
				className={classes.root}
				alt="Chat Attachment" 
				/>
	)
}
export default ChatAttachment;