import { Box, makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "row",
		marginBottom: "2vh",
		"& img": {
			width: "8vw",
			height: "auto",
			objectFit: "contain",
			borderRadius: 10
		},
	},
}));

const ImagePreview = memo(({ images }) => {

	const classes = useStyles();

	return (
		<Box className={classes.root}>
			{images.map((image, idx) => 
				<img src={URL.createObjectURL(image)} alt="Preview" key={idx} />
			)}
		</Box>
	)
})
export default ImagePreview;