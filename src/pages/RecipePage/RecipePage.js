import Header from '../../Layout/Header';
import RecipeInformationCard from './components/RecipeInformationCard';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

export default function RecipePage() {
	const spoonacularApiKey ="36ca42633a0e4c23a7c5823ea0382c8d";
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
