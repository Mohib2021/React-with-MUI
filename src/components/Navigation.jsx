import {
	alpha,
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Toolbar,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
	toolBar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logoLg: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	logoSm: {
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	search: {
		display: "flex",
		alignItems: "center",
		padding: "3px",
		width: "50%",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.3),
		},
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.open ? "flex" : "none"),
			width: "70%",
		},
	},
	searchInput: {
		color: "white",
		width: "100%",
	},
	badgeIcons: {
		alignItems: "center",
		display: (props) => (props.open ? "none" : "flex"),
	},
	searchBtn: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none !important",
		},
	},
	cancelBtn: {
		[theme.breakpoints.up("sm")]: {
			display: "none !important",
		},
	},
	badge: {
		marginRight: theme.spacing(2),
	},
}));

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles({ open });
	return (
		<AppBar>
			<Toolbar className={classes.toolBar}>
				<Typography className={classes.logoLg} variant="h6">
					Mohib Dev
				</Typography>
				<Typography className={classes.logoSm} variant="h6">
					MOHIB
				</Typography>
				<div className={classes.search}>
					<Search />
					<InputBase className={classes.searchInput} placeholder="Search..." />
					<Cancel
						className={classes.cancelBtn}
						onClick={() => setOpen(false)}
					/>
				</div>
				<div className={classes.badgeIcons}>
					<Search className={classes.searchBtn} onClick={() => setOpen(true)} />
					<Badge badgeContent={4} color="error" className={classes.badge}>
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error" className={classes.badge}>
						<Notifications />
					</Badge>
					<Avatar
						alt="mohib"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
