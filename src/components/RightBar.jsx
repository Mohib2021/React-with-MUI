import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
	right: {
		paddingTop: theme.spacing(10),
	},
}));
const RightBar = () => {
	const classes = useStyles();
	return <Container className={classes.right}>RightBar</Container>;
};

export default RightBar;
