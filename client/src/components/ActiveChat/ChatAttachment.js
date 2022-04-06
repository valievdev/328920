import { makeStyles } from '@material-ui/core/styles';

export const useImageStyles = makeStyles(() => ({
  root: {
    width: '12vw',
    height: (props) =>
      props.attachmentLen > 1 ? '8vw' : props.withMessage ? '10vw' : '12vw',
    objectFit: 'cover',
    marginRight: (props) =>
      !props.isSenderBubble && props.attachmentLen > 1 ? 10 : 0,
  },
}));

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: (props) => props.borderRadius,
    marginLeft: (props) =>
      props.isSenderBubble && props.attachmentLen > 1 ? 10 : 0,
  },
}));

const calculateBorderRadius = (isSenderBubble, withMessage, attachmentLen) => {
  if (withMessage && attachmentLen === 1) {
    if (isSenderBubble) {
      return '10px 10px 0 0';
    }
    return '0 10px 0 0';
  } else if (isSenderBubble) return '10px 10px 0 10px';
  return '0 10px 10px 10px';
};

const ChatAttachment = ({
  url,
  isSenderBubble,
  withMessage,
  attachmentLen,
}) => {
  const borderRadius = calculateBorderRadius(
    isSenderBubble,
    withMessage,
    attachmentLen
  );
  const classes = useStyles({ borderRadius, attachmentLen, isSenderBubble });
  const imageStyles = useImageStyles({ attachmentLen, withMessage });

  return (
    <img
      src={url}
      className={`${classes.root} ${imageStyles.root}`}
      alt="Chat Attachment"
    />
  );
};
export default ChatAttachment;
