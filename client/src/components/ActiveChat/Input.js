import React, { useEffect, useState, useRef, useCallback } from 'react';
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
    '&:hover .inputIcons': {
      color: '#8A8A8A',
    },
    '&:focus-within .inputIcons': {
      color: '#8A8A8A',
    },
  },
  inputIcons: {
    marginRight: 8,
    color: '#C3CEDB',
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [imageURLs, setImageURLs] = useState([]);
  const imageDeleteTokens = useRef([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleRemoveImage = useCallback(async idx => {
    const deleteToken = imageDeleteTokens.current[idx];
    await deleteImage(deleteToken);
    setImageURLs(prevURLs => {
      const newURLs = [...prevURLs];
      newURLs.splice(idx, 1);
      return newURLs;
    });
    setImagePreviews(prevData => {
      const newData = [...prevData];
      newData.splice(idx, 1);
      return newData;
    });
    imageDeleteTokens.current.splice(idx, 1);
  }, [imageDeleteTokens]);

  const deleteImage = token => (
      fetch(`https://api.cloudinary.com/v1_1/dhqlxce9z/delete_by_token?token=${token}`, {
        method: "POST",
    })
  )
  
  useEffect(() => {
    // delete images from cloudinary if user abandons chat before sending
    return async () => {
      await Promise.all( 
        imageDeleteTokens.current.map(token => 
            deleteImage(token)
        )
      );
    }
  }, []);

  const handleUploadImage = async (event) => {
    // Display image preview from client-side file
    const newImages = Array.from(event.target.files);
    setImagePreviews(prevImages => [...prevImages, ...newImages]);

    // Upload images to cloudinary as user uploads 
    const attachments = await Promise.all(
      newImages.map(async (image) => {
        const imageData = new FormData();
        imageData.append("file", image);
        imageData.append("upload_preset", "ogktzp5i");
        return fetch("https://api.cloudinary.com/v1_1/dhqlxce9z/image/upload", {
            method: "POST",
            body: imageData
        })
        .then(res => res.json())
        .then(data => {
            imageDeleteTokens.current.push(data.delete_token);
            return data.secure_url;
          })
        .catch(err => console.error(err));
      })
    );
    setImageURLs(prevImages => [...prevImages, ...attachments]);
  }
    

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imageURLs
    };
    await postMessage(reqBody);
    setText('');
    setImageURLs([]);
    setImagePreviews([]);
    imageDeleteTokens.current = [];
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      { imagePreviews.length > 0 && 
        <ImagePreview images={imagePreviews} onRemoveImage={handleRemoveImage} /> 
      }
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
                  color="inherit"
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
