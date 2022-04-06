import { alpha, Box, IconButton, makeStyles } from '@material-ui/core';
import { memo } from 'react';
import { useImageStyles } from './ChatAttachment';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2vh',
    '& div': {
      borderRadius: 20,
      backgroundSize: 'cover',
      maxWidth: '12vw',
    },
    '& button': {
      backgroundColor: alpha('#fff', 0.6),
      color: 'black',
      display: 'flex',
      height: 'fit-content',
      margin: '2px 4px auto auto',
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.4),
      },
    },
  },
}));

const withMessage = false;

const ImagePreview = memo(({ images, onRemoveImage }) => {
  const attachmentLen = images.length;

  const classes = useStyles();
  const imageStyles = useImageStyles({ attachmentLen, withMessage });

  return (
    <Box className={classes.root}>
      {images.map((image, idx) => (
        <Box
          sx={{ backgroundImage: `url(${URL.createObjectURL(image)})` }}
          className={imageStyles.root}
          alt="Preview"
          key={image.name + image.lastModified}
        >
          <IconButton
            aria-label="cancel image upload"
            onClick={() => onRemoveImage(idx)}
            size="small"
          >
            <ClearIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
});
export default ImagePreview;
