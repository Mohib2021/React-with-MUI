import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
	card: {
		marginBottom: theme.spacing(5),
	},
	cardImg: {
		objectFit: "cover",
		height: "470px",
	},
	cardHeading: {
		marginBottom: "0.5rem !important",
	},
}));
const Post = () => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					className={classes.cardImg}
					image="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
				/>
				<CardContent>
					<Typography className={classes.cardHeading} variant="h5">
						Various Foods
					</Typography>
					<Typography variant="body2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
						molestias recusandae commodi voluptates inventore. Assumenda aliquam
						magni aliquid voluptatem nihil quaerat ratione. Consequuntur numquam
						repellendus praesentium vel nemo molestias animi.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default Post;
