import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CreatePost from "./components/CreatePost";
import LeftBar from "./components/LeftBar";
import MiddleBar from "./components/MiddleBar";
import Navigation from "./components/Navigation";
import RightBar from "./components/RightBar";
const useStyles = makeStyles((theme) => ({
	rightBar: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));
function App() {
	const classes = useStyles();
	return (
		<div>
			<Navigation />
			<Grid container spacing={1}>
				<Grid item sm={2} xs={2}>
					<LeftBar />
				</Grid>
				<Grid item sm={7} xs={10}>
					<MiddleBar />
				</Grid>
				<Grid item sm={3} className={classes.rightBar}>
					<RightBar />
				</Grid>
			</Grid>
			<CreatePost />
		</div>
	);
}

export default App;
