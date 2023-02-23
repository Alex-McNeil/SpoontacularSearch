import './RecipeCard.css';
import Button from '@mui/material/Card';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function RecipeCard({recipeData}) {
	return (
		<Card sx={{ maxWidth: 320 }} className="card">
			<CardHeader
				title={recipeData.title}
				key={`${recipeData.id}-cardHeader`}
				className="cardHeader"
			/>
			<CardMedia
				component="img"
				height="194"
				className="cardImage"
				image={recipeData.image}
				alt={recipeData.title}
				key={`${recipeData.id}-cardMedia`}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Preparation time: {recipeData.readyInMinutes}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Health Score: {recipeData.healthScore}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Servings: {recipeData.servings}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Weight Watcher's Smart Points: {recipeData.weightWatcherSmartPoints}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Vegan? {recipeData.vegan ? "Yes" : "No"}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Dairy Free? {recipeData.dairyFree ? "Yes" : "No"}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Gluten Free? {recipeData.glutenFree ? "Yes" : "No"}
				</Typography>
			</CardContent>
			<CardActions disableSpacing key={`${recipeData.id}-cardActions`} style={{marginTop: "1em"}}>
				<Link to={`/recipe/${recipeData.id}`}>
					<Button variant="contained" key={`${recipeData.id}-button`} className="recipeDetails">Recipe Details</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

RecipeCard.propTypes = {
	recipeData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		imgType: PropTypes.string,
	}).isRequired,
}
