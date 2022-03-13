import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Post from "./Post";
const useStyles = makeStyles((theme) => ({
	middle: {
		paddingTop: theme.spacing(10),
	},
}));
const MiddleBar = () => {
	const classes = useStyles();
	return (
		<Container className={classes.middle}>
			<Post />
			<Post />
			<Post />
			<Post />
		</Container>
	);
};

export default MiddleBar;
