import React, { useState } from 'react';
import { Box, IconButton, FormControl, FilledInput, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ImagePreview from './ImagePreview';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
    "&:hover .inputIcons": {
      color: "#8A8A8A",
    },
    "&:focus-within .inputIcons": {
      color: "#8A8A8A",
    },
  },
  inputIcons: {
    marginRight: 8,
    color: "#CAD5E3",
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUploadImage = (event) => {
    const images = event.target.files;
    setImages(prevImages => [...prevImages, ...images]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const attachments = Promise.all(images.map(async (image) => {
      const imageData = new FormData();
      imageData.append("file", image);
      imageData.append("upload_preset", "ogktzp5i");
      const response = await fetch("https://api.cloudinary.com/v1_1/dhqlxce9z/image/upload", {
          method: "POST",
          body: imageData
        });
      return response.json();
    }));
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {images.length > 0 && <ImagePreview images={images} />}
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <Box classes={{ root: classes.inputIcons }} className="inputIcons">
              <InputAdornment position="end">
              <IconButton
                variant="contained"
                component="label"
              >
                <FileCopyOutlinedIcon />
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={handleUploadImage} 
                  accept="image/*"
                />
              </IconButton>
              </InputAdornment>
            </Box>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
