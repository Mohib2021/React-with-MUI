import {
	Bookmark,
	ExitToApp,
	Home,
	List,
	Person,
	PhotoCamera,
	PlayCircleOutline,
	Settings,
	Storefront,
	TabletMac,
} from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
	left: {
		paddingTop: theme.spacing(10),
		backgroundColor: theme.palette.primary.dark,
		height: "100vh",
		color: "white",
		position: "fixed",
		[theme.breakpoints.up("md")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
	},
	iconsAndName: {
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
		marginBottom: theme.spacing(3),
		[theme.breakpoints.up("md")]: {
			marginBottom: theme.spacing(4),
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("md")]: {
			fontSize: "18px !important",
		},
	},
	text: {
		display: "block",
		fontWeight: "500 !important",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
}));
const LeftBar = () => {
	const classes = useStyles();
	return (
		<div className={classes.left}>
			<Container>
				<div className={classes.iconsAndName}>
					<Home className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Homepage
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<Person className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Friends
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<List className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Lists
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<PhotoCamera className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Camera
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<PlayCircleOutline className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Video
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<TabletMac className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Apps
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<Bookmark className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Collections
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<Storefront className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Market Place
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<Settings className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						Settings
					</Typography>
				</div>
				<div className={classes.iconsAndName}>
					<ExitToApp className={classes.icon} />
					<Typography className={classes.text} variant="body2">
						LogOut
					</Typography>
				</div>
			</Container>
		</div>
	);
};

export default LeftBar;
