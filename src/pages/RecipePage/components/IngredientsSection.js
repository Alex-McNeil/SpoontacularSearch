import "./IngredientsSection.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function IngredientsSection({ingredients}) {
	return (
		<Paper variant="elevation" elevation={6} className="ingredientsSection" sx={{backgroundColor: "#befcd9"}}>
			<div className="ingredientsContent">
				<Typography variant="h6" color="text.primary">
					<u>Ingredients:</u>
				</Typography>
				<List>
					{
						ingredients.map((ingredient) => {
							return (
								<ListItem key={`${ingredient.id}-${ingredient.name}`} className="ingredientsItem"><strong>{ingredient.name}</strong> {`(${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort})`}</ListItem>
							);
						})
					}
				</List>
			</div>
		</Paper>
	);
}

export default IngredientsSection;
