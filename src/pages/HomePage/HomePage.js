import './HomePage.css';
import RecipeGrid from './components/RecipeGrid';
import Header from '../../Layout/Header';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useCallback, useState} from 'react';

function HomePage() {
	const spoonacularApiKey ="36ca42633a0e4c23a7c5823ea0382c8d";
	const [searchValue, setSearchValue] = useState('');
	const [recipeData, setRecipeData] = useState(null);
	const [paginationOffset, setPaginationOffset] = useState(0);

	const  retrieveRecipeData = useCallback(() => {
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularApiKey}&query=${searchValue}&number=5&offset=${paginationOffset}&addRecipeInformation=true`)
			.then((response) => response.json())
			.then((data) => {
				setRecipeData(data);
			})
	}, [paginationOffset, searchValue, spoonacularApiKey]);

	const handleChange = useCallback((e) => {
		setSearchValue(e.target.value);
	}, [setSearchValue]);

	const handleCuisineSelect = useCallback((e) => {
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularApiKey}&query=${searchValue}&number=5&offset=${paginationOffset}&cuisine=${e.target.value}&addRecipeInformation=true`)
			.then((response) => response.json())
			.then((data) => {
				setRecipeData(data);
			})
	}, [paginationOffset, searchValue, spoonacularApiKey]);

	const handleNext = useCallback(() =>{
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularApiKey}&query=${searchValue}&number=5&offset=${paginationOffset + 5}&addRecipeInformation=true`)
			.then((response) => response.json())
			.then((data) => {
				setRecipeData(data);
			})
		setPaginationOffset(paginationOffset + 5);
	}, [paginationOffset, searchValue, setPaginationOffset, spoonacularApiKey]);

	const handlePrevious = useCallback(() =>{
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularApiKey}&query=${searchValue}&number=5&offset=${paginationOffset - 5}&addRecipeInformation=true`)
			.then((response) => response.json())
			.then((data) => {
				setRecipeData(data);
			})
		setPaginationOffset(paginationOffset - 5);
	}, [paginationOffset, searchValue, setPaginationOffset, spoonacularApiKey]);

	return (
		<div className="HomePage">
			<Header />
			<div role="main" className="content">
				<Grid container justifyContent="space-between">
					<Grid item xs={8} align="right">
						<TextField
							placeholder="Search for a Recipe..."
							id="searchRecipe"
							onChange={handleChange}
							value={searchValue}
							variant="outlined"
							label="Search for a Recipe (ex: Pasta)"
							color="primary"
							className="searchInput"
							autoComplete="off"
					/>
					</Grid>
					<Grid item xs={4} align="left" className="searchGrid">
						<Button
							className="searchButton"
							onClick={retrieveRecipeData}
							variant="contained"
						>
							Search
						</Button>
					</Grid>
				</Grid>
				{
					recipeData && recipeData.results.length > 0
						&& (
							<RecipeGrid
								onCuisineSelect={handleCuisineSelect}
								onNext={handleNext}
								onPrevious={handlePrevious}
								recipeData={recipeData}
							/>
						)
				}
				{
					recipeData && recipeData.results.length === 0
						&& <Typography variant="body" component="p" style={{marginTop: "2em"}}>No results, try a different search.</Typography>
				}
			</div>
		</div>
	);
}

export default HomePage;
