import Header from '../../Layout/Header';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import RecipeInformationCard from './components/RecipeInformationCard';

export default function RecipePage() {
	const spoonacularApiKey ="36ca42633a0e4c23a7c5823ea0382c8d";
	// const spoonacularApiKey = "abfb34cb46034efbacefae8521f59e96";
	const [recipeData, setRecipeData] = useState(null);
	const [loading, setLoading] = useState(true);
	const params = useParams();

	useEffect(() => {
		fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${spoonacularApiKey}`)
			.then((response) => response.json())
			.then((data) => {
				setRecipeData(data);
				setLoading(false);
			})
	}, [params, spoonacularApiKey])

	if (loading) {
		return (
			<p>Loading...</p>
		);
	}

	return (
		<div>
			<Header backButton />
			<div role="main">
				<RecipeInformationCard recipeData={recipeData} />
			</div>
		</div>
	);
}
