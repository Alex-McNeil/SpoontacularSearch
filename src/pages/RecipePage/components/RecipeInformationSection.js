import Typography from '@mui/material/Typography';

function RecipeInformationSection({recipeData}) {
	return (
		<>
			<Typography variant="h6" color="text.primary">
				<u>Recipe Information</u>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Preparation time: <strong>{recipeData.readyInMinutes} minutes</strong>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Health Score: <strong>{recipeData.healthScore}</strong>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Servings: <strong>{recipeData.servings}</strong>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Weight Watcher's Smart Points: <strong>{recipeData.weightWatcherSmartPoints}</strong>
			</Typography>
		</>
	);
}

export default RecipeInformationSection;
