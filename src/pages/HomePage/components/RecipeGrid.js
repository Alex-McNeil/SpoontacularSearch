import cuisines from './cusines.json';
import RecipeCard from './RecipeCard';
import './RecipeGrid.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import {useCallback, useState} from 'react';

export default function RecipeGrid({onCuisineSelect, onNext, onPrevious, recipeData}) {
	const results = recipeData.results;
	const cuislineList = cuisines.results;

	const [cuisineChoice, setCuisineChoice] = useState('select');

	const handleChange = useCallback((e) => {
		setCuisineChoice(e.target.value);
		onCuisineSelect(e);
	}, [onCuisineSelect, setCuisineChoice]);

	return (
		<div>
			<Grid className="recipeGrid" container justifyContent={"space-between"}>
				<Grid item align="center" xs={12}>
					<Typography variant="body">
						Displaying results <strong>{`${recipeData.offset + 1} - ${recipeData.offset + recipeData.number}`}</strong> out of <strong>{`${recipeData.totalResults}`}</strong> results.
					</Typography>
				</Grid>
				<Grid item align="center" xs={12} className="paginationSection">
					<Button
						variant="contained"
						disabled={recipeData.offset === 0}
						onClick={onPrevious}
						style={{marginLeft: "1em"}}
					>
						{"< Prev"}
					</Button>
					<Button
						variant="contained"
						disabled={recipeData.offset >= recipeData.totalResults - recipeData.number}
						onClick={onNext}
						style={{marginLeft: "1em"}}
					>
						{"Next >"}
					</Button>
				</Grid>
			</Grid>
			<div className="recipeSelect">
				<Typography  htmlFor="cuisineSelect" variant="body">Filter by Cuisine:</Typography>
				<Select
					id="cuisineSelect"
					style={{marginLeft: "1em"}}
					onChange={handleChange}
					value={cuisineChoice}
					className="cuisineSelect"
					MenuProps={{
						className: "selectMenu"
					}}
				>
					<MenuItem value="select" key="pleaseSelect">Select cuisine...</MenuItem>
					{
						cuislineList.map((cuisine) => {
							return <MenuItem value={cuisine.type} key={cuisine.type}>{cuisine.type}</MenuItem>
						})
					}
				</Select>
			</div>
			<Grid container className="recipeContent" justifyContent="center">
				{
					results.map((recipe) => (
						<Grid item className="recipeCards" align="center" key={`${recipe.id}-grid`}>
							<RecipeCard recipeData={recipe} key={recipe.id} />
						</Grid>
					))
				}
			</Grid>
		</div>
	);
}

RecipeGrid.propTypes = {
	onCuisineSelect: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrevious: PropTypes.func.isRequired,
	recipeData: PropTypes.shape({
		offset: PropTypes.number.isRequired,
		number: PropTypes.number.isRequired,
		results: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			imgType: PropTypes.string,
		})),
		totalResults: PropTypes.number.isRequired,
	}).isRequired,
}
