import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

function Header({backButton}) {
	return (
		<AppBar role="banner" position="relative">
			<Grid container>
				<Grid item align="left" xs={4} className="headerButtonGrid">
					{
						backButton && (
							<Link to="/">
								<Button sx={{ border: 1, borderColor: 'text.primary' }} variant="contained" className="headerButton">{'< Back to Search'}</Button>
							</Link>
						)
					}
				</Grid>
				<Grid item align="center">
					<Typography variant="h3" component="h3" color="white" className="headerTitle">Spoonacular Recipe Search</Typography>
				</Grid>
			</Grid>
		</AppBar>
	);
}

export default Header;
