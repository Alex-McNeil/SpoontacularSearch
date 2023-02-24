import "./InstructionsSection.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function InstructionsSection({instructions}) {
	return (
		<Paper variant="elevation" elevation={6} className="instructionsSection" sx={{backgroundColor: "#befcd9"}}>
			<div className="instructionsContent">
				<Typography variant="h6" color="text.primary">
					<u>Instructions:</u>
				</Typography>
				{
					instructions.map((instruction, index) => {
						return (
							<div key={`instructions-${index}`}>
								{
									instruction.name && (
										<Typography variant="body" color="text.primary" key={instruction.name}>
											{instruction.name}
										</Typography>
									)
								}
								<List
									sx={{
										listStyleType: 'disc',
										pl: 3,
										'& .MuiListItem-root': {
											display: 'list-item',
										},
									}}
									key={`list-${index}`}
								>
									{
										instruction.steps.map((step) => {
											return (
												
													<ListItem component="li" key={`${step.number}-listItem`}>
														<span className="instructionsStep">{step.step}</span>
													</ListItem>
											)
										})
									}
								</List>
							</div>
						);
					})
					
				}
			</div>
		</Paper>
	);
}

export default InstructionsSection;
