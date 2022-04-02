import { Box, makeStyles } from "@material-ui/core";
import { memo } from "react";
import { useImageStyles } from "./ChatAttachment";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "row",
		marginBottom: "2vh",
		"& img": {
			borderRadius: 10
		},
	},
}));

const withMessage = false;

const ImagePreview = memo(({ images }) => {

	const attachmentLen = images.length;

	const classes = useStyles();
	const imageStyles = useImageStyles({attachmentLen, withMessage});

	return (
		<Box className={classes.root}>
			{images.map((image, idx) => 
				<img 
					src={URL.createObjectURL(image)}
					className={imageStyles.root}
					alt="Preview"
					key={idx} 
					/>
			)}
		</Box>
	)
})
export default ImagePreview;