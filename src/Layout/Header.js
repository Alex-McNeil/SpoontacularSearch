import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

function Header({backButton}) {
	const navigate = useNavigate();
	
	const backToHome = (() => {
		navigate(`/`);
	});

	return (
		<AppBar role="banner" position="relative"sx={{backgroundColor: "#56bf84"}}>
			<Grid container>
				{
					backButton && (
						<Grid item align="left" xs={3} lg={4} className="headerButtonGrid">
							<Button
								onClick={backToHome}
								sx={{ border: 1, borderColor: 'text.primary' }}
								variant="contained"
								className="headerButton"
							>
								{'< Back to Search'}
							</Button>
						</Grid>
					)
				}
				<Grid item align="center" xs={backButton ? 9 : 12} lg={backButton ? 8 : 12}>
					<Typography variant="h3" component="h1" color="text.primary" className="headerTitle">Spoonacular Recipe Search</Typography>
				</Grid>
			</Grid>
		</AppBar>
	);
}

export default Header;
