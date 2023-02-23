import Typography from '@mui/material/Typography';

function RecipeInformationSection({recipeData}) {
	return (
		<>
			<Typography variant="h6" color="text.primary">
				<u>Recipe Information:</u>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Preparation time: {recipeData.readyInMinutes} minutes
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
		</>
	);
}

export default RecipeInformationSection;
