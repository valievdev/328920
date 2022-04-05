import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import ChatAttachment from './ChatAttachment';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 'auto'
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: props => 
      props.attachmentLen < 2 ?
        'column'
      :
        'column-reverse',
  },
  attachmentWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  bubble: {
    minWidth: props => 
      props.attachmentLen === 1 ? 
        '12vw'
      :
        'auto',
    width: 'fit-content',
    background: '#EFF5F8',
    borderRadius: props => 
      props.attachmentLen === 1 ? 
        '0 0 0 10px'
      :
        '10px 10px 0 10px',

    margin: props => 
      props.attachmentLen > 1 ? 
        '10px 0 10px auto'
      :
        '0',
    marginLeft: 'auto',
    
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    padding: 8,
    color: '#7593B5',
    textAlign: props =>  
      props.attachmentLen === 1 ?
          'center'
        :
          'left'
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const attachmentLen = attachments.length;
  const classes = useStyles({attachmentLen});

  return (
    <Box className={classes.root}>
      <Box className={classes.messageWrapper}>
      <Typography className={classes.date}>{time}</Typography>
          <Box className={classes.attachmentWrapper}>
            {attachments.map(attachment => 
              <ChatAttachment 
                key={attachment.id}
                url={attachment.url}
                withMessage={text.length > 0 && true} 
                attachmentLen={attachmentLen}
                isSenderBubble
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
  );
};

export default SenderBubble;
