import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';
import {Routes, Route} from "react-router-dom"

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="recipe/:id" element={<RecipePage />} />
		</Routes>
	);
}

export default App;
