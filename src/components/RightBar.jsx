import {
	Avatar,
	AvatarGroup,
	Box,
	Container,
	ImageList,
	ImageListItem,
	Link,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Facebook, LinkedIn, YouTube } from "@mui/icons-material";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
const useStyles = makeStyles((theme) => ({
	right: {
		paddingTop: theme.spacing(10),
		position: "sticky",
		top: 0,
	},
	title: {
		fontSize: "1rem",
		margin: "10px 0px !important",
		fontWeight: "500",
	},
}));
const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
	},
];
const RightBar = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container className={classes.right}>
			<Box>
				<Typography className={classes.title}>Online Friends</Typography>
				<AvatarGroup
					sx={{
						flexDirection: "row",
					}}
					max={6}
				>
					<Avatar
						alt="Remy Sharp"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>

					<Avatar
						alt="Travis Howard"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
					<Avatar alt="Agnes Walker" />
					<Avatar
						alt="Agnes Walker"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
					/>
				</AvatarGroup>
			</Box>
			<Box>
				<Typography className={classes.title}>Gallery</Typography>
				<ImageList sx={{ margin: 0 }} cols={3} rowHeight={100}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
			<Box>
				<Typography className={classes.title}>Categories</Typography>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Facebook" {...a11yProps(0)} />
						<Tab label="Linkedin" {...a11yProps(1)} />
						<Tab label="Youtube" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<Link href="https://www.facebook.com" target="_blank">
						{" "}
						<Facebook />{" "}
					</Link>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Link href="https://www.linkedin.com" target="_blank">
						{" "}
						<LinkedIn />{" "}
					</Link>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Link href="https://www.youtube.com" target="_blank">
						{" "}
						<YouTube />{" "}
					</Link>
				</TabPanel>
			</Box>
		</Container>
	);
};

export default RightBar;
