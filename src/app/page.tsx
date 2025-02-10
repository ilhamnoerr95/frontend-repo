import styles from "./page.module.css";

// uicomponent
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
	return (
		<div className={styles.page}>
			<Container maxWidth="sm">
				<Box sx={{ height: "50vh" }}>
					<Card
						sx={{
							height: "100%",
							backgroundColor: "rgba(255, 255, 255, 0.2)",
							backdropFilter: "blur(2px)",
							boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
							backgroundImage:
								"linear-gradient(to bottom,rgba(35, 135, 217, 0.8), rgba(245, 239, 239,0.4))",
						}}
					>
						<CardContent sx={{}}>
							<Typography
								gutterBottom
								sx={{ color: "text.secondary", fontSize: 14 }}
							>
								Word of the Day
							</Typography>
							<Typography
								variant="h5"
								component="div"
							>
								biji
							</Typography>
							<Typography sx={{ color: "text.secondary", mb: 1.5 }}>
								adjective
							</Typography>
							<Typography variant="body2">
								well meaning and kindly.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Container>
		</div>
	);
}
