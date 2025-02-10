import React, { useRef } from "react";

// uicomponent
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

import { useFormik } from "formik";

const Login = () => {
	const form = useRef(null);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		onSubmit: (values) => {
			console.log(values);
			// Here you can make an API call or do any other logic based on the form values.
		},
	});

	return (
		<Container maxWidth="sm">
			<Box sx={{ height: "50vh" }}>
				<Card
					sx={{
						flexDirection: "column",
						alignContent: "center",
						px: {
							md: 10,
						},
						height: "100%",
						backgroundColor: "rgba(255, 255, 255, 0.2)",
						backdropFilter: "blur(2px)",
						boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
						backgroundImage:
							"linear-gradient(to bottom, rgba(245, 239, 239,0.5), rgba(51, 146, 229, 0.8))",
					}}
				>
					<form
						ref={form}
						className={"login-form"}
						onSubmit={formik.handleSubmit}
					>
						<CardContent>
							<Box sx={{ mb: 1, textAlign: "center" }}>
								<Typography
									variant="h5"
									component="h2"
									color="primary"
								>
									<strong>Login to your account</strong>
								</Typography>
							</Box>
							<Box sx={{ mb: 1 }}>
								<TextField
									// variant="standard"
									focused
									color="primary"
									fullWidth
									margin="normal"
									id="email"
									label="Email Address"
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
							</Box>
							<Box sx={{ mb: 1 }}>
								<TextField
									focused
									color="primary"
									fullWidth
									margin="normal"
									id="password"
									label="Password"
									name="password"
									type="password"
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
							</Box>
						</CardContent>
						<CardActions sx={{ justifyContent: "center" }}>
							<Button
								disabled={!formik.values.password || !formik.values.email}
								type="submit"
								variant="contained"
								size="small"
								sx={{ width: "100%" }}
							>
								Login
							</Button>
						</CardActions>
					</form>
				</Card>
			</Box>
		</Container>
	);
};

export default Login;
