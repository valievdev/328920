import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {
        console.log(message);
        const time = new Date(message.createdAt).toLocaleTimeString('en-us', {timeStyle: 'short'});
        return message.senderId === userId ? (
          <SenderBubble 
            key={message.id}
            text={message.text}
            attachments={message.attachments}
            time={time}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            attachments={message.attachments}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
