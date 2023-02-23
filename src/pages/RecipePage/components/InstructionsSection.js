import "./InstructionsSection.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function InstructionsSection({instructions}) {
	return (
		<Paper variant="elevation" elevation={6} className="instructionsSection">
			<div className="instructionsContent">
				<Typography variant="h6" color="text.primary">
					<u>Instructions:</u>
				</Typography>
				{
					instructions.map((instruction) => {
						return (
							<>
								{
									instruction.name && (
										<Typography variant="body" color="text.primary">
											<u>Instructions:</u>
										</Typography>
									)
								}
								{
									instruction.steps.map((step, index) => {
										return (
											<List
												sx={{
													listStyleType: 'disc',
													pl: 2,
													'& .MuiListItem-root': {
														display: 'list-item',
													},
												}}
											>
												<ListItem component="li">
													{step.step}
												</ListItem>
											</List>
										)
									})
								}
							</>
						);
					})
					
				}
			</div>
		</Paper>
	);
}

export default InstructionsSection;
