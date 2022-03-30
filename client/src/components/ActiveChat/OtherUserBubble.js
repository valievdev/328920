import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import ChatAttachment from './ChatAttachment';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginTop: '25px',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: props => props.attachmentLen < 2 ?
      'column'
    :
      'column-reverse',
  },
  attachmentWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  bubble: {
    minWidth: props => props.attachmentLen === 1 ? 
      '12vw'
    :
      'auto',
    width: 'fit-content',
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: props => props.attachmentLen === 1 ? 
      '0 0 10px 10px'
    :
      '0 10px 10px 10px',
    marginBottom: props => props.attachmentLen > 1 ? 
      '10px'
    :
      '0'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
}));

const OtherUserBubble = ({ text, attachments, time, otherUser }) => {
  const attachmentLen = attachments.length;
  const classes = useStyles({attachmentLen});

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Box className={classes.messageWrapper} sx={{display: "flex", flexDirection: "column"}}>
          <Box className={classes.attachmentWrapper}>
            { attachments.map((attachment, key) => 
              <ChatAttachment 
                key={key}
                url={attachment}
                withMessage={text.length > 0 && true} 
                attachmentLen={attachmentLen}
                />
            )}
          </Box>
          { text.length > 0 &&
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          }
       </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
