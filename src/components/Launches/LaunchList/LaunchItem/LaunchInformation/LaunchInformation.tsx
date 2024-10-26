import { Box, ListItemText, Typography } from '@mui/material';
import { LaunchInformationProps } from '../../../../../utils/types/types';

const LaunchInformation = ({ launch }: LaunchInformationProps) => {
  const missionName = launch.mission_name;
  const rocketName = launch.rocket?.rocket_name;
  const launchYear = launch.launch_year;

  const primaryText = missionName;
  const secondaryText = (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {rocketName && <Typography variant="body2">{rocketName}</Typography>}
      <Typography variant="body2">{launchYear}</Typography>
    </Box>
  );

  return (
    <ListItemText
      primary={primaryText}
      secondary={secondaryText}
      primaryTypographyProps={{ variant: 'h6' }}
      secondaryTypographyProps={{ component: 'div' }}
    />
  );
};

export default LaunchInformation;
