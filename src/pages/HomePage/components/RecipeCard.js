import './RecipeCard.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export default function RecipeCard({recipeData}) {
	const navigate = useNavigate();

	const goToRecipeDetails = (() => {
		navigate(`/recipe/${recipeData.id}`);
	});

	return (
		<Card sx={{ maxWidth: 260, backgroundColor: "#befcd9" }} className="card" key={`${recipeData.id}-card`}>
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
			<CardContent className="cardContent">
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-readyInMinutes`}>
					Preparation Time: <strong>{recipeData.readyInMinutes} minutes</strong>
				</Typography>
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-healthScore`}>
					Health Score: <strong>{recipeData.healthScore}</strong>
				</Typography>
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-servings`}>
					Servings: <strong>{recipeData.servings}</strong>
				</Typography>
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-weightWatcherSmartPoints`}>
					Weight Watcher's Smart Points: <strong>{recipeData.weightWatcherSmartPoints}</strong>
				</Typography>
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-vegan`}>
					Vegan: <strong>{recipeData.vegan ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
				</Typography>
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-dairyFree`}>
					Dairy Free: <strong>{recipeData.dairyFree ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
				</Typography>
				<Typography variant="body2" color="text.secondary" key={`${recipeData.id}-glutenFree`}>
					Gluten Free: <strong>{recipeData.glutenFree ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
				</Typography>
			</CardContent>
			<Button
				variant="contained"
				key={`${recipeData.id}-button`}
				className="recipeDetails"
				sx={{marginBottom: "1em", textTransform: "none", border: "1px solid black"}}
				onClick={goToRecipeDetails}
			>
				Recipe Details
			</Button>
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
