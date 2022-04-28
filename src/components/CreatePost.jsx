import { Add } from "@mui/icons-material";
import {
	Alert,
	Button,
	Fab,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Snackbar,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
	createBtn: {
		position: "fixed !important",
		bottom: theme.spacing(4),
		right: theme.spacing(4),
	},
	modal: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
		width: 500,
		height: 500,
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
	},

	item: {
		marginBottom: 20,
	},
}));
const CreatePost = () => {
	const classes = useStyles();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	return (
		<>
			<Tooltip title="Create" className={classes.createBtn}>
				<Fab onClick={() => setIsModalOpen(true)} color="primary">
					<Add />
				</Fab>
			</Tooltip>
			<Modal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={classes.modal}>
					<form autoComplete="off">
						<Typography variant="h5" sx={{ fontWeight: 500 }} align="center">
							Create Your Post
						</Typography>
						<Box className={classes.item}>
							<TextField
								size="small"
								label="Post Title"
								variant="standard"
								fullWidth
							/>
						</Box>
						<Box className={classes.item}>
							<TextField
								size="small"
								multiline
								label="Post Description "
								rows={4}
								fullWidth
							/>
						</Box>
						<Box className={classes.item}>
							<TextField
								size="small"
								label="Visibility"
								defaultValue="Public"
								select
							>
								<MenuItem value="Public">Public</MenuItem>
								<MenuItem value="Only me">Only me</MenuItem>
								<MenuItem value="Friends">Friends</MenuItem>
							</TextField>
						</Box>
						<Box className={classes.item}>
							<FormLabel>Who can comment?</FormLabel>
							<RadioGroup defaultValue="Everyone">
								<FormControlLabel
									value="Everyone"
									control={<Radio size="small" />}
									label="Everyone"
								/>
								<FormControlLabel
									value="Friends"
									control={<Radio size="small" />}
									label="Friends"
								/>
								<FormControlLabel
									value="None"
									control={<Radio size="small" />}
									label="None"
								/>
							</RadioGroup>
						</Box>
						<Box>
							<Button
								sx={{ marginRight: 2 }}
								variant="contained"
								color="success"
								onClick={handleClick}
							>
								Create
							</Button>
							<Button
								onClick={() => setIsModalOpen(false)}
								variant="contained"
								color="error"
							>
								Cancel
							</Button>
						</Box>
					</form>
				</Box>
			</Modal>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert
					variant="filled"
					onClose={handleClose}
					severity="success"
					sx={{ width: "100%" }}
				>
					Your post is created successfully.
				</Alert>
			</Snackbar>
		</>
	);
};

export default CreatePost;
