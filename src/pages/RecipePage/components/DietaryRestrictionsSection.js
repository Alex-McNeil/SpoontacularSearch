import "./DietaryRestrictionsSection.css";
import Typography from '@mui/material/Typography';

function DietaryRestrictionsSection({recipeData}) {
	return (
		<>
			<Typography variant="h6" color="text.primary">
				<u>Dietary Restrictions</u>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Vegan: <strong>{recipeData.vegan ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Dairy Free: <strong>{recipeData.dairyFree ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Gluten Free: <strong>{recipeData.glutenFree ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Low FODMAP: <strong>{recipeData.lowFodmap ? <span className="yesText">Yes</span> : <span className="noText">No</span>}</strong>
			</Typography>
		</>
	);
}

export default DietaryRestrictionsSection;
