import './RecipeInformationCard.css';
import DietaryRestrictionsSection from './DietaryRestrictionsSection';
import IngredientsSection from './IngredientsSection';
import InstructionsSection from './InstructionsSection';
import RecipeInformationSection from './RecipeInformationSection';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function RecipeInformationCard({recipeData}) {
	return (
		<>
			<Grid container justifyContent="center">
				<Grid item align="center" xs={12} xl={8}>
					<Paper sx={{width: "90%", backgroundColor: "#befcd9"}} className="recipeDetailsCard">
						<Typography
							variant="h3"
							component="h2"
							key={`${recipeData.id}-cardHeader`}
							className="recipeDetailsTitle"
						>
							{recipeData.title}
						</Typography>
						<Grid container className="recipeDetailsGrid">
							<Grid item xs={12} sm={12} md={12} lg={4} align="center">
								<img
									src={recipeData.image}
									alt={recipeData.title}
									key={`${recipeData.id}-cardMedia`}
									className="recipeDetailsImage"
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={4} align="center" className="recipeInformation">
								<RecipeInformationSection recipeData={recipeData} />
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={4} align="center" className="dietaryRestrictions">
								<DietaryRestrictionsSection recipeData={recipeData} />
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Grid container justifyContent="center">
				<Grid item xs={12} sm={4} lg={3}>
					<IngredientsSection ingredients={recipeData.extendedIngredients} />
				</Grid>
				<Grid item xs={12} sm={7} lg={8}>
					<InstructionsSection instructions={recipeData.analyzedInstructions} />
				</Grid>
			</Grid>
		</>
	);
}
