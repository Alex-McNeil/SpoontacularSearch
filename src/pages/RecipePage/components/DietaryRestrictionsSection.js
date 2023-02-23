import Typography from '@mui/material/Typography';

function DietaryRestrictionsSection({recipeData}) {
	return (
		<>
			<Typography variant="h6" color="text.secondary">
				<u>Dietary Restrictions:</u>
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
			<Typography variant="body2" color="text.secondary">
				Low FODMAP? {recipeData.lowFodmap ? "Yes" : "No"}
			</Typography>
		</>
	);
}

export default DietaryRestrictionsSection;
